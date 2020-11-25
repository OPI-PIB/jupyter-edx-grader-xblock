"""Setup for Graded Jupyter Notebook XBlock."""

import os
from setuptools import setup


def package_data(pkg, roots):
    """Generic function to find package_data.

    All of the files under each of the `roots` will be declared as package
    data for package `pkg`.

    """
    data = []
    for root in roots:
        for dirname, _, files in os.walk(os.path.join(pkg, root)):
            for fname in files:
                data.append(os.path.relpath(os.path.join(dirname, fname), pkg))

    return {pkg: data}


setup(
    name='xblock_jupyter_graded',
    version='0.5.1',
    description='Grades Jupyter Notebooks in your XBlock',
    license='BSD3',          # TODO: choose a license: 'AGPL v3' and 'Apache 2.0' are popular.
    packages=[
        'xblock_jupyter_graded',
    ],
    install_requires=[
        'XBlock',
        'nbformat==4.4',
        'notebook==5.7.8',
        'jupyter_client==5.3.4',
        'jupyter-console==5.2.0',
        'ipykernel==4.10.1',
        'ipython==5.9.0',
        'zipp==1.2.0',
        'jsonschema==2.5.1',
        'qtconsole==4.7.5'
    ],
    entry_points={
        'xblock.v1': [
            'xblock_jupyter_graded = xblock_jupyter_graded.xblock_jupyter_graded:JupyterGradedXBlock',
        ]
    },
    package_data=package_data("xblock_jupyter_graded", ["static", "migrations",
        "templates", "translations", "rest", "docker"]),
)
