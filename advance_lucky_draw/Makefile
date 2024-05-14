# Makefile for Node.js/Express project

# Define the Node.js executable
NODE = node

# Define any directories containing source files
SRCDIR = src

# Define the source files (JavaScript files)
SRCS = $(wildcard $(SRCDIR)/*.js)

# Define the output directory
OUTDIR = build

# Define the output file (your Express server entry point)
OUTFILE = $(OUTDIR)/server.js

# Targets
all: $(OUTFILE)

$(OUTFILE): $(SRCS)
	@mkdir -p $(OUTDIR)
	$(NODE) $(SRCS) > $@

clean:
	rm -rf $(OUTDIR)

.PHONY: all clean
