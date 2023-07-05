---
layout: post
title: ESMValTool v2.9.0
date: 2023-07-06
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

- It is now possible to use the [**Dask distributed scheduler**](https://docs.dask.org/en/latest/deploying.html), which can significantly reduce the run-time of recipes. Configuration examples and advice are available in our [documentation](https://docs.esmvaltool.org/projects/ESMValCore/en/latest/quickstart/configure.html#config-dask).
   
#### ESMValTool:

- A **new diagnostic** has been added to provide a **high-level interface to** [**seaborn**](https://seaborn.pydata.org/),
   a Python data visualization library based on [matplotlib](https://matplotlib.org/).
  
-  This release includes a **new recipe and diagnostic** that represent the major physical processes that describe **Arctic-midlatitude teleconnections** and
   provide the basis for the CMIP6 model evaluation for the further application of causal discovery. The results are discussed in [Galytska et al. (in review in Journal of Geophysical Research: Atmospheres)](https://essopenarchive.org/doi/full/10.1002/essoar.10512569.1).

-------------------

Finally, a collection of output from 153 ESMValTool recipes run with version v2.9.0 is available on this portal: https://esmvaltool.dkrz.de/shared/esmvaltool/v2.9.0rc1/debug.html 

Happy model evaluation with ESMValTool!
