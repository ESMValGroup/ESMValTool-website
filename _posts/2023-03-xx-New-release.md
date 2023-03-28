---
layout: post
title: ESMValTool v2.8.0
date: 2023-03-xx
---

## ESMValTool v2.8.0 released!

New versions of the ESMValTool (v2.8.0) and ESMValCore (v2.8.0) have just been released:
-	https://github.com/ESMValGroup/ESMValTool/releases/tag/v2.8.0
-	https://github.com/ESMValGroup/ESMValCore/releases/tag/v2.8.0 

These versions are available, as usual, on GitHub, conda-forge, PyPI and as containers. 

Please refer to the Changelogs for an overview of the latest changes and additions:
-	https://docs.esmvaltool.org/en/latest/changelog.html#v2-8-0
-	https://docs.esmvaltool.org/projects/esmvalcore/en/latest/changelog.html#v2-8-0 

-------------------

### Highlights:
ESMValCore:

- ESMValCore now supports **wildcards** in recipes and offers improved support for
  **ancillary variables** and **dataset versioning**. 
   
  For details, see [Automatically populating a recipe with all available datasets](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/recipe/overview.html#dataset-wildcards) and [Defining supplementary variables](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/recipe/overview.html#supplementary-variables).

- Support for **CORDEX** datasets in a rotated pole coordinate system has been added.

- **Native [ICON](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/quickstart/find_data.html#read-icon)** output is now made **UGRID-compliant**
  on-the-fly to unlock the use of more sophisticated regridding algorithms.
   
- The **Python API** has been extended with the addition of three modules: [`esmvalcore.config`](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/api/esmvalcore.config.html#module-esmvalcore.config), [`esmvalcore.dataset`](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/api/esmvalcore.dataset.html#module-esmvalcore.dataset), and [`esmvalcore.local`](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/api/esmvalcore.local.html#module-esmvalcore.local). 
   
   For details, see our new [example notebooks](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/example-notebooks.html).

- The preprocessor **[`multi_model_statistics()`](https://docs.esmvaltool.org/projects/esmvalcore/en/latest/recipe/preprocessor.html#multi-model-statistics)**
  has been extended to support more use-cases.
   
ESMValTool:

- This release has seen the inclusion of the code for four figures of Chapter 3 of the **IPCC AR6 WG1 report**
  ([Link to documentation](https://docs.esmvaltool.org/en/latest/recipes/recipe_ipccwg1ar6ch3.html)).
   
-  A new set of recipes and diagnostics has been included to **evaluate cloud
   climatologies** from CMIP models as used in [Lauer et al. (2023)](https://doi.org/10.1175/JCLI-D-22-0181.1) ([Link to documentation](https://docs.esmvaltool.org/en/latest/recipes/recipe_clouds.html)).
   
-  We have also included a set of recipes for **extreme events, regional and impact 
   evaluation** as used in [Weigel et al. (2021)](https://doi.org/10.5194/gmd-14-3159-2021) and in **IPCC AR5**
   ([Link to documentation](https://docs.esmvaltool.org/en/latest/recipes/recipe_ipccwg1ar5ch9.html)).

-------------------

Finally, a collection of output from 148 ESMValTool recipes run with version v2.8.0 is available on this portal: https://esmvaltool.dkrz.de/shared/esmvaltool/v2.8.0/ 

Happy model evaluation with ESMValTool!
