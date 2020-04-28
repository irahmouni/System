CC 		= gcc
OBJS 	= main.o gitMultiplication.o 
CFLAGS  = -c -Wall -ansi -pedantic
LDFLAGS =
PGM 	= Multiplication

all:	 $(PGM)

$(PGM):  $(OBJS) 
	$(CC) -o $(PGM) $(OBJS) $(LDFLAGS)
	
.c.o:
	$(CC) $(CFLAGS) $<
clean:
	rm -f $(PGM) 
	rm -f $(OBJS) 
	rm -f *~


