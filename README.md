# action-build-import-map-microfrontend-deps

Github action for building import-map-microfrontend-deps

## Usage

Add a `uses: single-spa/action-build-global-script-deps@v1` step to your Github workflow

## Inputs

See [action.yml](/action.yml) for a list of all required and optional inputs

## Example

```yml
- name: Build Global Script Dependencies
  uses: single-spa/action-build-global-script-deps@v1
  with:
    global-scripts: global-scripts.json
    output-folder: dist
```
