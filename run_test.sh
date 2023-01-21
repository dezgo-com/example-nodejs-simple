docker build -t test_nodejs .

docker run --rm \
    -v `pwd`/output:/output \
    test_nodejs $1

