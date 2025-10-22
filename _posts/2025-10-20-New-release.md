---
layout: post
title: ESMValTool v2.13.0
date: 2025-10-20
---

## ESMValTool v2.13.0 released!

New versions of the ESMValTool (v2.13.0) and ESMValCore (v2.13.0) have just been released:
-	[https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.13.0](https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.13.0)
-	[https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.13.0](https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.13.0) 

These versions are available, as usual, on GitHub, conda-forge, PyPI and as containers. 

Please refer to the Changelogs for an overview of the latest changes and additions:
-	[https://docs.esmvaltool.org/en/latest/changelog.html#v2-13-0](https://docs.esmvaltool.org/en/latest/changelog.html#v2-13-0)
-	[https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-13-0](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-13-0) 

-------------------

### Highlights:
#### ESMValCore:

- Extra facets are now more easily configurable with the new configuration system, as described in [Extra Facets](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/quickstart/configure.html#config-extra-facets).
- Preprocessor [esmvalcore.preprocessor.extract_surface_from_atm()](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/api/esmvalcore.preprocessor.html#esmvalcore.preprocessor.extract_surface_from_atm) allows to extract the surface values of a 3D atmospheric variable based on surface pressure.
- Force the new configuration system through the environment variable ESMVALTOOL_CONFIG_DIR as described [here](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/quickstart/configure.html#config-yaml-files).
- A set of ruff rules has been enabled in place of Prospector and related tools and Codacy, modernizing our development setup. Additional information is available in the section on [Code quality](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/contributing.html#code-quality) in our contribution guidelines.
- An on-the-fly CMORizer for ICON-XPP is now available.
- [Stale issues and pull requests](https://github.com/esMValGroup/esMValCore/issues?q=label%3AStale) will now be closed automatically following the stale action workflow.

#### ESMValTool:

- New/updated CMORizers: ESACCI-OZONE, ESACCI-SEAICE, OSI-450 (OSISAF/CCI)
- New diagnostics:
  - Seasonal cycle and time series of Arctic/Antarctic sea ice area ([REF diagnostic](https://docs.esmvaltool.org/en/latest/recipes/recipe_ref.html))
  - [Zero Emissions Commitment (ZEC)](https://docs.esmvaltool.org/en/latest/recipes/recipe_zec.html#recipes-zec)
  - Cloud radiative effects ([REF diagnostic](https://docs.esmvaltool.org/en/latest/recipes/recipe_ref.html))
  - [Transient Climate Response to Emissions (TCRE)](https://docs.esmvaltool.org/en/latest/recipes/recipe_tcre.html#recipes-tcre)
  - [ENSO metrics](https://docs.esmvaltool.org/en/latest/recipes/recipe_enso_ref.html#recipes-enso-metrics)
  - 2D histograms and scatterplots for clouds ([REF diagnostic](https://docs.esmvaltool.org/en/latest/recipes/recipe_ref.html))
  - Regional historical changes ([REF diagnostic](https://docs.esmvaltool.org/en/latest/recipes/recipe_ref.html))
  - [Evaluation of climate variables at Global warming levels](https://docs.esmvaltool.org/en/latest/recipes/recipe_calculate_gwl_exceedance_stats.html#recipes-recipe-calculate-gwl-exceedance-stats)
  - [Sea surface temperature bias (IPCC AR6 Ch3 Fig. 3.24)](https://docs.esmvaltool.org/en/latest/recipes/recipe_ipccwg1ar6ch3.html#recipes-ipccwg1ar6ch3)
  - [Climate drivers for fire](https://docs.esmvaltool.org/en/latest/recipes/recipe_ref_fire.html#recipe-ref-fire)
  - [Rate of sea ice area loss per degree of warming](https://docs.esmvaltool.org/en/latest/recipes/recipe_seaice_sensitivity.html#recipe-seaice-sensitivity)
  - Ozone metrics and climatology ([REF diagnostic](https://docs.esmvaltool.org/en/latest/recipes/recipe_ref.html))

Happy model evaluation with ESMValTool!
