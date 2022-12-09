function power(n: number, exp: number): number {
	if (exp == 0) return 1;
	return n * power(n, exp - 1);
}
