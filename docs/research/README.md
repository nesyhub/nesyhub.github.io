# Research Documentation

## Automatic arXiv Updates

The `preprints-arxiv.md` file is automatically updated daily with new neurosymbolic AI papers from arXiv.

### How it works

1. **Script**: `fetch_neurosymbolic_arxiv.py` queries arXiv for papers containing "neurosymbolic" or "neuro-symbolic"
2. **Schedule**: GitHub Actions runs the script daily at 2 AM UTC
3. **Auto-commit**: When new papers are found, changes are automatically committed and pushed to main
4. **Workflow**: `.github/workflows/update-arxiv.yml`
5. **Chart Data**: The script also generates `arxiv-stats.json` in `docs/public/research/` for the interactive chart displayed on the preprints page

### Manual Update

You can also manually trigger an update:

1. **Via GitHub UI**:
   - Go to Actions tab → "Update arXiv Preprints" workflow → "Run workflow"

2. **Via command line**:
   ```bash
   cd docs/research
   python fetch_neurosymbolic_arxiv.py
   ```

### Configuration

The script searches for papers with this query:
```python
query = '(all:neurosymbolic OR all:"neuro-symbolic")'
```

To modify the search criteria, edit `fetch_neurosymbolic_arxiv.py`.

### Requirements

```bash
pip install requests feedparser
```

