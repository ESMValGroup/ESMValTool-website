---
layout: post
title: ESMValTool v2.9.0
date: 2023-07-05
---

## ESMValTool v2.9.0 released!

New versions of the ESMValTool (v2.9.0) and ESMValCore (v2.9.0) have just been released:
-	[https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.9.0](https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.9.0)
-	[https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.9.0](https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.9.0) 

These versions are available, as usual, on GitHub, conda-forge, PyPI and as containers. 

Please refer to the Changelogs for an overview of the latest changes and additions:
-	[https://docs.esmvaltool.org/en/latest/changelog.html#v2-9-0](https://docs.esmvaltool.org/en/latest/changelog.html#v2-9-0)
-	[https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-9-0](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-9-0) 

-------------------

### Highlights:
#### ESMValCore:

- It is now possible to use the Dask distributed scheduler, which can significantly reduce the run-time of recipes. Configuration examples and advice are available in our documentation. More work on improving the computational performance is planned, so please share your experiences, good and bad, with this new feature in ESMValGroup/ESMValCore#1763.
   
#### ESMValTool:

- This release includes the diagnostics for reproducing four figures of Chapter 3 of the **IPCC AR6 WG1 report**
  ([Link to documentation](https://docs.esmvaltool.org/en/latest/recipes/recipe_ipccwg1ar6ch3.html)).
   
-  A new set of recipes and diagnostics has been included to **evaluate cloud
   climatologies** from CMIP models as used in [Lauer et al. (2023)](https://doi.org/10.1175/JCLI-D-22-0181.1) ([Link to documentation](https://docs.esmvaltool.org/en/latest/recipes/recipe_clouds.html)).
   
-  Addition of a set of recipes for **extreme events, regional and impact 
   evaluation** as used in [Weigel et al. (2021)](https://doi.org/10.5194/gmd-14-3159-2021) and in **IPCC AR5**
   ([Link to documentation](https://docs.esmvaltool.org/en/latest/recipes/recipe_ipccwg1ar5ch9.html)).

-------------------

Finally, a collection of output from 153 ESMValTool recipes run with version v2.9.0 is available on this portal: https://esmvaltool.dkrz.de/shared/esmvaltool/v2.9.0rc1/debug.html 

Happy model evaluation with ESMValTool!
