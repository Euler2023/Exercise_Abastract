---
title: "Exercise AG66: Zeros Poles and Residues of Elliptic Functions"
topic: arithmetic-geometry
difficulty: intermediate
status: not-started
tags:
  - exercise
  - arithmetic-geometry
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005 (corrected fourth printing, 2016), Ch. 1, §1.4, Exercise 1.4.1(a)–(c), printed p. 36, PDF p. 51"
source_refs:
  - "S7/ch-1/sec-4/ex-1"
created: 2026-10-24
---

# Exercise AG66: Zeros Poles and Residues of Elliptic Functions

## Problem Statement

> [!question] Original Exercise 1.4.1
> Let $E=\mathbb C/\Lambda$ be a complex elliptic curve where $\Lambda=\omega_1\mathbb Z\oplus\omega_2\mathbb Z$, and let $f$ be a nonconstant elliptic function with respect to $\Lambda$, viewed either as a meromorphic function on $\mathbb C$ with periods $\Lambda$ or as a meromorphic function on $E$. Let $P=\{x_1\omega_1+x_2\omega_2:x_1,x_2\in[0,1]\}$ be the parallelogram representing $E$ when its opposing boundary edges are suitably identified, and let $\partial P$ be the counterclockwise boundary of $P$. Since $f$ has only finitely many zeros and poles in $E$, some translation $t+\partial P$ misses them all. This exercise establishes some necessary properties of $f$. Showing that these properties are sufficient for an appropriate $f$ to exist requires more work, see for example [JS87].
>
> (a) Compute that
> $$
> \frac1{2\pi i}\int_{t+\partial P}f(z)\,dz=0.
> $$
> It follows by the Residue Theorem that the sum of the residues of $f$ on $E$ is $0$. In particular there is no meromorphic function on $E$ with one simple pole and so the Weierstrass $\wp$-function, with its double pole at $\Lambda$, is the simplest nonconstant elliptic function with respect to $\Lambda$.
>
> (b) Compute that
> $$
> \frac1{2\pi i}\int_{t+\partial P}\frac{f'(z)}{f(z)}\,dz=0.
> $$
> It follows by the Argument Principle that $f$ has as many zeros as poles, counting multiplicity. Replacing $f$ by $f-w$ for any $w\in\mathbb C$ shows that $f$ takes every value the same number of times, counting multiplicity. In particular the Weierstrass $\wp$-function on $E$ takes every value twice.
>
> (c) Compute that
> $$
> \frac1{2\pi i}\int_{t+\partial P}\frac{zf'(z)}{f(z)}\,dz\in\Lambda.
> $$
> Show that this integral is also $\sum_{x\in E}\nu_x(f)x$, where $\nu_x(f)$ is the order of $f$ at $x$, meaning that $f(z)=(z-x)^{\nu_x(f)}g(z)$ with $g(x)\ne0$. Note that $\nu_x(f)=0$ except at zeros and poles of $f$, so the sum is finite. Thus parts (b) and (c) combine to show that for any nonconstant meromorphic function $f$ on $E$,
> $$
> \sum_{x\in E}\nu_x(f)=0\text{ in }\mathbb Z,
> \qquad \sum_{x\in E}\nu_x(f)x=0\text{ in }E.
> $$
> (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Opposite edges have opposite orientations and differ by a period. Apply this first to $f$ and then to $h=f'/f$.

> [!hint]- Hint 2 — source appendix
> For the weighted integral in (c), the extra factor $z$ leaves period multiples of the unweighted edge integrals. Each integral of $f'/f$ along a period edge is $2\pi i$ times an integer, since the endpoint values of $f$ agree.

> [!hint]- Hint 3
> At a zero or pole represented by $x$, write $f(z)=(z-x)^\nu g(z)$. Then $zf'(z)/f(z)=\nu z/(z-x)+zg'(z)/g(z)$ has residue $\nu x$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation
>
> Fix the normalized basis $\omega_1/\omega_2\in\mathcal H$. The counterclockwise boundary runs through
> $$
> t\longrightarrow t+\omega_2\longrightarrow t+\omega_2+\omega_1
> \longrightarrow t+\omega_1\longrightarrow t.
> $$
> For a meromorphic $\Lambda$-periodic function $H$ with no pole on this boundary, the edges parallel to $\omega_2$ contribute
> $$
> \int_0^{\omega_2}H(t+u)\,du-\int_0^{\omega_2}H(t+\omega_1+u)\,du=0,
> $$
> and the two edges parallel to $\omega_1$ cancel in the same way. Therefore $\int_{t+\partial P}H(z)\,dz=0$.
>
> **(a) Residues.** Apply this cancellation to $H=f$. The Residue Theorem says that the normalized integral is the sum of the residues at the poles inside $t+P$, which represent all poles on $E$ exactly once. Thus their sum is zero. A single simple pole would have a nonzero residue, a contradiction. A holomorphic elliptic function is bounded on a compact fundamental parallelogram and hence on $\mathbb C$, so Liouville's theorem makes it constant. A nonconstant elliptic function must consequently have total pole multiplicity at least two; $\wp$ realizes this lower bound by its one double pole.
>
> **(b) Zero and pole counts.** The meromorphic function $h=f'/f$ is also periodic. Local factorization at a zero or pole gives
> $$
> \frac{f'(z)}{f(z)}=\frac{\nu_x(f)}{z-x}+\frac{g'(z)}{g(z)},
> $$
> so its residue is $\nu_x(f)$. Applying the same boundary cancellation and the Residue Theorem gives
> $$
> 0=\frac1{2\pi i}\int_{t+\partial P}h(z)\,dz
> =\sum_{x\in E}\nu_x(f).
> $$
> Positive orders count zeros and negative orders count poles, with their multiplicities. For any $w\in\mathbb C$, $f-w$ is nonconstant and has the same poles with the same orders as $f$. Choose a boundary avoiding its zeros and poles and repeat the argument. The zeros of $f-w$ therefore have total multiplicity equal to the fixed total pole multiplicity of $f$. The value $\infty$ has that multiplicity by the definition of a pole. Since $\wp$ has one double pole, it takes every value in $\mathbb P^1(\mathbb C)$ twice, counting multiplicity.
>
> **(c) Weighted sum.** Write
> $$
> I_j=\int_0^{\omega_j}h(t+u)\,du\quad(j=1,2).
> $$
> Pair the horizontal edges in the integral of $zh(z)$: their difference is $-\omega_1I_2$. Pair the other two edges: their difference is $\omega_2I_1$. Thus
> $$
> \int_{t+\partial P}zh(z)\,dz=\omega_2I_1-\omega_1I_2.
> $$
> Along either edge, $f$ traces a closed curve in $\mathbb C^*$, because its endpoint values agree and it is nonzero and finite on the edge. The winding number formula, equivalently the change of a continuous logarithm along that path, gives $I_j=2\pi i n_j$ for integers $n_j$. Hence
> $$
> \frac1{2\pi i}\int_{t+\partial P}\frac{zf'(z)}{f(z)}\,dz
> =n_1\omega_2-n_2\omega_1\in\Lambda.
> $$
> Choose for each zero or pole on $E$ its representative $\widetilde x$ in the interior of $t+P$. The local factorization from (b) yields
> $$
> \operatorname{Res}_{\widetilde x}\!\left(\frac{zf'(z)}{f(z)}\right)=\nu_x(f)\widetilde x.
> $$
> The Residue Theorem consequently identifies the complex-valued integral with $\sum_x\nu_x(f)\widetilde x$. Projecting to $E$ gives
> $$
> \sum_{x\in E}\nu_x(f)x=0\quad\text{in }E.
> $$
> Choosing other representatives changes the complex sum by a lattice element and therefore leaves this conclusion unchanged. Together with (b), this proves both assertions.
>
> As a check, for a generic $w$ the function $\wp-w$ has zeros at $z$ and $-z$ and a double pole at $0$. Its divisor has degree $1+1-2=0$ and torus sum $z+(-z)-2\cdot0=0$, exactly as required. At a branch value the two zeros merge into a double zero, and the multiplicity statements still apply.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Complex Tori and Isogenies|Complex Tori and Isogenies]]
- [[08 - Arithmetic Geometry/Concepts/Weierstrass Elliptic Functions|Weierstrass Elliptic Functions]]

## Notes

- **Source status:** The full statement and its three subparts were checked against the rendered original [Diamond–Shurman, Ch. 1, §1.4, printed p. 36, PDF p. 51]. The appendix hint was checked at [Appendix A, printed p. 414, PDF p. 425]. This note supplies an independent derivation.
- **Imported inputs:** The Residue Theorem, Argument Principle, winding number formula for a closed path in $\mathbb C^*$, and Liouville's theorem are named complex-analysis inputs. The argument does not use a converse to the two divisor constraints.
- **Representative convention:** In the source's complex integral formula in (c), the symbols $x$ in the weighted sum must be represented inside the chosen parallelogram. The final sum in $E$ is intrinsic and needs no such choice.
- **Proof boundary:** Degree zero and zero torus sum are proved necessary here. Their sufficiency for an elliptic function with a prescribed divisor is outside the assigned proof.
