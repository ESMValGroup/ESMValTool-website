---
layout: post
title: ESMValTool v2.14.0
date: 2026-03-13
---

## ESMValTool v2.14.0 released!

New versions of the ESMValTool (v2.14.0) and ESMValCore (v2.14.0) have just been released:
-	[https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.14.0](https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.14.0)
-	[https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.14.0](https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.14.0) 

These versions are available, as usual, on GitHub, conda-forge, PyPI and as containers. 

Please refer to the Changelogs for an overview of the latest changes and additions:
-	[https://docs.esmvaltool.org/en/latest/changelog.html#v2-14-0](https://docs.esmvaltool.org/en/latest/changelog.html#v2-14-0)
-	[https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-14-0](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-14-0) 

-------------------

### Highlights:
#### ESMValCore:

- Support for intake-esgf and new ``esmvaltool config`` commands have been added (See [Data sources](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/quickstart/configure.html#config-data-sources))
- A new way to configure the CMOR tables and the possibility to use data that is not described in a CMOR table have been implemented (see [CMOR table configuration](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/quickstart/configure.html#cmor-table-configuration))
- CMIP7 data is now supported (see [Pull request #2935](https://github.com/ESMValGroup/ESMValCore/pull/2935))

#### ESMValTool:

- New diagnostics/recipes:
   - Calculation of Lamb weathertypes ([Pull request #4231](https://github.com/ESMValGroup/ESMValTool/pull/4231))
   - Histogram plots ([Pull request #4329](https://github.com/ESMValGroup/ESMValTool/pull/4329))
   - Hour of maximum precipitation ([Pull request #4334](https://github.com/ESMValGroup/ESMValTool/pull/4334))
- Support for new observational datasets:
   - ESACCI SNOW ([Pull request #3542](https://github.com/ESMValGroup/ESMValTool/pull/3542))
   - Improved support for ESACCI AEROSOL ([Pull request #3629](https://github.com/ESMValGroup/ESMValTool/pull/3629))
   - EN4 ([Pull request #4193](https://github.com/ESMValGroup/ESMValTool/pull/4193))
- We modernized our development set-up and are now using [Ruff](https://docs.astral.sh/ruff/) for [Code quality](https://docs.esmvaltool.org/en/latest/community/code_documentation.html#code-quality) checks and formatting.

Happy model evaluation with ESMValTool!
