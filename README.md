# Instruction

Code to reproduce figures from the paper  
*"Testing the Anelastic Convective Entity Model against a Cloud-Resolving Model for a Case of Elevated Convection"*

Mostly GrADS scripts (`*.gs`) with one Python script (`*.py`).
Parts of the code rely on functions from my other repo: [grads-library](https://github.com/kuantingkuo/grads-library).

## Data

Data can be downloaded from Zenodo:  
[https://doi.org/10.5281/zenodo.16792278](https://doi.org/10.5281/zenodo.16792278)

## Setup

- Update `MODEL_ROOT` in the scripts to point to your local data folder.  
- Set the environment variable `GASCRP` to your local `grads-library` path.
- For the Python script (`Fig1d.py`), ensure you have the necessary dependencies installed (e.g., via `pip` or `conda`):
  ```bash
  pip install xarray numpy matplotlib
  ```

## Usage

- Run the GrADS scripts named like `Fig1a.gs` or Python code like `Fig1d.py` to generate the figures.  
  Example: `python Fig1d.py`
- Some GrADS scripts start with a line like `grads -a 2` to open GrADS with the correct aspect ratio.

---
