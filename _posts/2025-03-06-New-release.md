---
layout: post
title: ESMValTool v2.12.0
date: 2025-03-06
---

## ESMValTool v2.12.0 released!

New versions of the ESMValTool (v2.12.0) and ESMValCore (v2.12.0) have just been released:
-	[https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.12.0](https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.12.0)
-	[https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.12.0](https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.12.0) 

These versions are available, as usual, on GitHub, conda-forge, PyPI and as containers. 

Please refer to the Changelogs for an overview of the latest changes and additions:
-	[https://docs.esmvaltool.org/en/latest/changelog.html#v2-12-0](https://docs.esmvaltool.org/en/latest/changelog.html#v2-12-0)
-	[https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-12-0](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-12-0) 

-------------------

### Highlights:
#### ESMValCore:

- Preprocessor [esmvalcore.preprocessor.extract_time()](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/api/esmvalcore.preprocessor.html#esmvalcore.preprocessor.extract_time) now allows to extract time blocks in each year by making parameters start_year and end_year optional.
- A new way of [configuring the tool](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/quickstart/configure.html#config) has been developed.
- Performance improvements:
  - An iris-esmf-regrid scheme has been added to preprocessor [esmvalcore.preprocessor.regrid()](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/api/esmvalcore.preprocessor.html#esmvalcore.preprocessor.regrid), which improves the regridding of 2D grids and adds the capability to regrid UGRID meshes out of the box.
  - Data is now saved from one preprocessing task at the time when using the distributed scheduler, in order to avoid running out of memory.
  - A better default num_workers has been set when using more than one max_parallel_tasks with an unconfigured threaded scheduler.
- An on-the-fly cmorizer for ACCESS native data is now available.

#### ESMValTool:

- Recipe [recipe_portrait_CMIP.yml](https://docs.esmvaltool.org/en/latest/recipes/recipe_portrait.html#recipe-portrait) allows the creation of portrait plots to visualize performance metrics.
- A set of new [recipes](https://docs.esmvaltool.org/en/latest/recipes/recipe_benchmarking.html#recipe-benchmarking) allow plotting arbitrary preprocessor output to benchmark a model simulation with other datasets. See also ESMValTool paper on [benchmarking and monitoring climate models](https://doi.org/10.5194/gmd-18-1169-2025).

Happy model evaluation with ESMValTool!
