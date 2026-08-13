---
layout: post
title: ESMValTool v2.14.0
date: 2026-03-20
---

## ESMValTool v2.14.0 released!

New versions of the ESMValTool (v2.14.0) and ESMValCore (v2.14.0) have just been released:

* [https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.14.0](https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.14.0)
* [https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.14.0](https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.14.0)

These versions are available, as usual, on GitHub, conda-forge, PyPI and as containers.

Please refer to the Changelogs for an overview of the latest changes and additions:

* [https://docs.esmvaltool.org/en/latest/changelog.html#v2-14-0](https://docs.esmvaltool.org/en/latest/changelog.html#v2-14-0)
* [https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-14-0](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-14-0)

### Highlights:

#### ESMValCore:

* Support for intake-esgf and new esmvaltool config commands have been added (see [Data sources](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/quickstart/configure.html#config-data-sources))
* A new way to configure the CMOR tables and the possibility to use data that is not described in a CMOR table have been implemented (see [CMOR table configuration](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/quickstart/configure.html#cmor-table-configuration))
* CMIP7 data is now supported (see [CMIP7 facets](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/reference/facets.html#cmip7))

#### ESMValTool:

* New diagnostics/recipes:
  - [Calculation of Lamb weathertypes](https://docs.esmvaltool.org/en/latest/recipes/recipe_weathertyping.html)
  - [Histogram plots](https://docs.esmvaltool.org/en/latest/api/esmvaltool.diag_scripts.plot_histogram.html)
  - [Hour of maximum precipitation](https://docs.esmvaltool.org/en/latest/api/esmvaltool.diag_scripts.hydrology.hour_of_max_precipitation.html)
* New observational datasets:
  - ESACCI SNOW
  - Improved support for ESACCI AEROSOL
  - EN4

Happy model evaluation with ESMValTool!
