FROM python:3.8
ARG PACKAGES
RUN apt-get update
RUN apt-get -y install libatlas-base-dev libblas3 liblapack3 liblapack-dev libblas-dev gfortran
RUN pip install --upgrade pip && pip install nbgrader==0.6.1
RUN pip install --upgrade nbconvert==5.6.1
RUN python3 -m venv /home/temp_env
RUN /home/temp_env/bin/pip install $PACKAGES
RUN /home/temp_env/bin/python -m ipykernel install --prefix=/usr/local/ --name="temp_env"
RUN mkdir -p /home/nbgrader/course/source/ps1 && \
    mkdir -p /etc/jupyter
COPY container.py run_grader.py autograded_checkers.py exceptions.py /home/jupyter/
