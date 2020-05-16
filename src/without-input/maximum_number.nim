let x = [1, 4, 2, 3, 5, 8, 9, 7, 6, 0]
var max = x[0]
for i in 1..high(x):
  if max < x[i]:
    max = x[i]

echo "Nilai maksimal : ", max
