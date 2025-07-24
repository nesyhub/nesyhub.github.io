import requests
import feedparser
from collections import defaultdict
from datetime import datetime
import re
import os

# Path to your markdown file
MARKDOWN_PATH = "preprints-arxiv.md"

# 1. Parse the latest date in the markdown and split out the title
latest_date = None
date_pattern = re.compile(r"^### (\d{4}-\d{2}-\d{2})")
title_line = ""
rest_content = ""
if os.path.exists(MARKDOWN_PATH):
    with open(MARKDOWN_PATH, "r") as f:
        lines = f.readlines()
        if lines:
            title_line = lines[0].rstrip("\n")
            rest_content = "".join(lines[1:]).lstrip("\n")
        for line in lines:
            match = date_pattern.match(line.strip())
            if match:
                date_str = match.group(1)
                date_obj = datetime.strptime(date_str, "%Y-%m-%d").date()
                if latest_date is None or date_obj > latest_date:
                    latest_date = date_obj

# 2. Fetch new papers from arXiv
query = '(all:neurosymbolic OR all:"neuro-symbolic")'
base_url = 'http://export.arxiv.org/api/query?'
params = {
    'search_query': query,
    'start': 0,
    'max_results': 1000,
    'sortBy': 'submittedDate',
    'sortOrder': 'descending'
}
query_url = f"{base_url}search_query={params['search_query']}&start={params['start']}&max_results={params['max_results']}&sortBy={params['sortBy']}&sortOrder={params['sortOrder']}"

response = requests.get(query_url)
feed = feedparser.parse(response.text)

# 3. Group new papers by publication date, only after the latest date in markdown
papers_by_date = defaultdict(list)
for entry in feed.entries:
    pub_date = entry.published.split('T')[0]
    pub_date_obj = datetime.strptime(pub_date, "%Y-%m-%d").date()
    if latest_date is None or pub_date_obj > latest_date:
        papers_by_date[pub_date].append(entry)

# 4. Prepare new content to insert after the title
new_content = []
for date in sorted(papers_by_date.keys(), reverse=True):
    new_content.append(f"### {date}\n")
    for entry in papers_by_date[date]:
        title = entry.title.replace('\n', ' ').strip()
        authors = ', '.join(author.name for author in entry.authors)
        link = entry.link
        new_content.append(f"- [{title}]({link})  ")
        new_content.append(f"  {authors}")
    new_content.append("")  # Blank line between dates

# 5. Write the updated markdown: title, new content, then the rest
if new_content:
    with open(MARKDOWN_PATH, "w") as f:
        f.write(title_line.strip() + "\n\n")
        f.write("\n".join(new_content).strip() + "\n\n")
        f.write(rest_content.strip() + "\n")
    print(f"Prepended {sum(len(v) for v in papers_by_date.values())} new papers to {MARKDOWN_PATH}")
else:
    print("No new preprints found since the latest date in the markdown.") 