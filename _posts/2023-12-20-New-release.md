---
layout: post
title: ESMValTool v2.10.0
date: 2023-12-20
---

## ESMValTool v2.10.0 released!

![v2.10.0_officially_released](/assets/img/ESMValTool_v2.10.0_officially_released.gif){:style="float: left;margin-bottom: 32px;"}

New versions of the ESMValTool (v2.10.0) and ESMValCore (v2.10.0) have just been released:
-	[https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.10.0](https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.10.0)
-	[https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.10.0](https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.10.0) 

These versions are available, as usual, on GitHub, conda-forge, PyPI and as containers. 

Please refer to the Changelogs for an overview of the latest changes and additions:
-	[https://docs.esmvaltool.org/en/latest/changelog.html#v2-10-0](https://docs.esmvaltool.org/en/latest/changelog.html#v2-10-0)
-	[https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-10-0](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-10-0) 

-------------------

### Highlights:
#### ESMValCore:

- All **statistics preprocessors support the same operators** and have a common [documentation](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/recipe/preprocessor.html#stat-preprocs). In addition, arbitrary keyword arguments for the statistical operation can be directly given to the preprocessor.

- The **output webpage** generated by the tool now looks better and provides methods to select and filter the output.

- **Improved computational efficiency**

#### ESMValTool:

- Added a **realistic IPCC example recipe** that reproduces figure 9.3 from AR6. It computes the mean sea-surface temperature anomaly between 1850-2100 over all available CMIP6 models. See the [recipe documentation](https://docs.esmvaltool.org/en/latest/recipes/recipe_examples.html#recipe-examples) or read the [blog post](https://blog.esciencecenter.nl/easy-ipcc-powered-by-esmvalcore-19a0b6366ea7) for more information.

- Added **more plot types to monitoring diagnostic**: Hovmoeller Z vs. time, Hovmoeller time vs latlon, variable vs. latitude are now available. See the [recipe documentation](https://docs.esmvaltool.org/en/latest/recipes/recipe_examples.html#recipe-examples) for more information.

- Many recipes now have **up-to-date obs4MIPs dataset names** so required data can automatically be downloaded from ESGF.

-------------------

Finally, a collection of output from 140 ESMValTool recipes run with version v2.10.0 is available on the [DKRZ portal](https://esmvaltool.dkrz.de/shared/esmvaltool/v2.10.0/). 

Happy model evaluation with ESMValTool!
