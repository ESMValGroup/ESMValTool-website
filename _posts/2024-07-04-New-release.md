---
layout: post
title: ESMValTool v2.11.0
date: 2024-07-04
---

## ESMValTool v2.11.0 released!

New versions of the ESMValTool (v2.11.0) and ESMValCore (v2.11.0) have just been released:
-	[https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.11.0](https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.11.0)
-	[https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.11.0](https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.11.0) 

These versions are available, as usual, on GitHub, conda-forge, PyPI and as containers. 

Please refer to the Changelogs for an overview of the latest changes and additions:
-	[https://docs.esmvaltool.org/en/latest/changelog.html#v2-11-0](https://docs.esmvaltool.org/en/latest/changelog.html#v2-11-0)
-	[https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-11-0](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-11-0) 

-------------------

### Highlights:
#### ESMValCore:

- Performance improvements have been made to four preprocessors that are now lazy: [mask_landsea](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/api/esmvalcore.preprocessor.html#esmvalcore.preprocessor.mask_landsea), [mask_landseaice](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/api/esmvalcore.preprocessor.html#esmvalcore.preprocessor.mask_landseaice), [mask_glaciated](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/api/esmvalcore.preprocessor.html#esmvalcore.preprocessor.mask_glaciated), [extract_levels](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/api/esmvalcore.preprocessor.html#esmvalcore.preprocessor.extract_levels).
- New preprocessors: [local_solar_time](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/api/esmvalcore.preprocessor.html#esmvalcore.preprocessor.local_solar_time), [distance_metrics](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/api/esmvalcore.preprocessor.html#esmvalcore.preprocessor.distance_metric), [histogram](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/api/esmvalcore.preprocessor.html#esmvalcore.preprocessor.histogram).

#### ESMValTool:

- Two new recipes have been added:
  * Recipe [recipe_aod_aeronet_assess.yml](https://docs.esmvaltool.org/en/latest/recipes/recipe_aod_aeronet_assess.html) evaluates model aerosol optical depth (AOD) climatologies against ground based observations from the AeroNET measurement network.
  * Recipe [recipe_climate_patterns.yml](https://docs.esmvaltool.org/en/latest/recipes/recipe_climate_patterns.html) generates climate patterns from CMIP6 model datasets.
- The ESACCI-WATERVAPOUR CMORizer now includes daily data and uses the officially released CDR2 data.
- Support for 5 new [datasets](https://docs.esmvaltool.org/en/latest/input.html#supported-datasets-for-which-a-cmorizer-script-is-available) has been added:
  * AeroNET
  * ANU Climate 2.0 Australian data
  * Australian Gridded Climate Data(AGCD) precipitation
  * NOAA-ERSST
  * NSIDC-G02202-sh sea ice fraction

Happy model evaluation with ESMValTool!
