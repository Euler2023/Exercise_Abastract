---
title: "Exercise MF22: Polynomial Fourier Growth and Cusp Holomorphy"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.2, Exercise 1.2.6, printed pp. 22-23, PDF pp. 37-38; Proposition 1.2.4, printed p. 17, PDF p. 32; Appendix A hint, printed p. 414, PDF p. 425"
source_refs:
  - "S7/ch-1/sec-2/ex-6"
created: 2026-10-24
---

# Exercise MF22: Polynomial Fourier Growth and Cusp Holomorphy

## Problem Statement

> [!question] Original Exercise 1.2.6
> This exercise proves Proposition 1.2.4. Let $\Gamma$ be a congruence subgroup of $SL_2(\mathbb Z)$, thus containing $\Gamma(N)$ for some $N$, and suppose that the function $f:\mathcal H\to\mathbb C$ is holomorphic and weight-$k$ invariant under $\Gamma$. Suppose also that in the Fourier expansion $f(\tau)=\sum_{n=0}^{\infty}a_nq_N^n$, the coefficients for $n>0$ satisfy $|a_n|\le Cn^r$ for some positive constants $C,r$.
>
> (a) Show that for any $\tau=x+iy\in\mathcal H$,
> $$
> |f(\tau)|\le|a_0|+C\sum_{n=1}^{\infty}n^re^{-2\pi ny/N}.\tag{1.6}
> $$
> Changing $n$ to a nonnegative real variable $t$, show that the continuous version $g(t)=t^re^{-2\pi ty/N}$ of the summand increases monotonically on $[0,rN/(2\pi y)]$ and then decreases monotonically on $[rN/(2\pi y),\infty)$. Using this, represent all but two terms of the sum in (1.6) as unit-wide boxes under the graph of $g$ and consider the missing terms individually to establish the estimate (where in this exercise $C_0$ and $C$ can denote different constants in different places)
> $$
> |f(\tau)|\le C_0+C\left(\int_0^{\infty}g(t)\,dt+1/y^r\right).
> $$
> After a change of variable the integral takes the form $C/y^{r+1}\cdot\int_0^{\infty}t^re^{-t}\,dt$. This last integral is a gamma function integral, to be introduced formally in Section 4.4, but at any rate it converges at both ends and is independent of $y$. In sum,
> $$
> |f(\tau)|\le C_0+C/y^r\quad\text{as }y\to\infty.
> $$
>
> (b) For every $\alpha\in SL_2(\mathbb Z)$, the transformed function $(f[\alpha]_k)(\tau)$ is holomorphic and weight-$k$ invariant under $\alpha^{-1}\Gamma\alpha$ and therefore has a Laurent expansion
> $$
> (f[\alpha]_k)(\tau)=\sum_{n\in\mathbb Z}a_n'q_N^n,\qquad q_N=e^{2\pi i\tau/N}.
> $$
> To show that the Laurent series truncates from the left to a power series it suffices to show that
> $$
> \lim_{q_N\to0}((f[\alpha]_k)(\tau)q_N)=0.
> $$
> If $\alpha$ fixes $\infty$ then this is immediate from the Fourier series of $f$ itself. Otherwise show that the transformed function $(f[\alpha]_k)(\tau)=(c\tau+d)^{-k}f(\alpha(\tau))$ satisfies
> $$
> \lim_{q_N\to0}|(f[\alpha]_k)(\tau)q_N|
> \le C\lim_{q_N\to0}(y^{r-k}|q_N|).
> $$
> Recalling that $q_N=e^{2\pi i(x+iy)/N}$, show that $y=C\log(1/|q_N|)$, and use the fact that polynomials dominate logarithms to complete the proof. (A hint for this exercise is at the end of the book.)
>
> **Referenced Proposition 1.2.4.** If $f$ is holomorphic on $\mathcal H$, weight-$k$ invariant under a congruence subgroup containing $\Gamma(N)$, and holomorphic at $\infty$ with the polynomial coefficient bound above, then $f[\alpha]_k$ is holomorphic at $\infty$ for every $\alpha\in SL_2(\mathbb Z)$; thus $f\in M_k(\Gamma)$. The source states this proposition on printed p. 17 / PDF p. 32.

> [!warning] Source issue
> The displayed conclusion in (a) retains the printed exponent $r$ and limit $y\to\infty$. The integral immediately above has exponent $r+1$, and the application in (b) needs control when $\operatorname{Im}(\alpha\tau)\to0$, rather than only as $y\to\infty$. A valid conclusion using the original coefficient exponent is $|f(x+iy)|\le A+B y^{-(r+1)}$ for all $y>0$. The solution writes $R=r+1$ explicitly; its cusp bound has $y^{R-k}$ in place of the printed $y^{r-k}$. Allowing constants to change does not itself justify changing an exponent. The intended polynomial-growth argument is valid after this adjustment.

## Hints

> [!hint]- Hint 1
> The derivative of $t^re^{-at}$ changes sign at $t=r/a$. Bound a unimodal sum by its integral plus twice its maximum.

> [!hint]- Hint 2
> Keep the integral's exponent $r+1$. Obtain a global bound $|f(x+iy)|\le A+B y^{-R}$ with $R=r+1$, rather than using only an estimate as $y\to\infty$.

> [!hint]- Hint 3
> For $c\ne0$ and bounded $x$, $|c\tau+d|$ grows like $y$ and $\operatorname{Im}(\alpha\tau)$ like $1/y$. An exponential in $-y$ dominates every resulting real power of $y$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> **(a)** The triangle inequality applied to the absolutely convergent power series gives (1.6). Put $a=2\pi/N$. Then
> $$
> g'(t)=t^{r-1}e^{-ayt}(r-ayt),
> $$
> so $g$ has the asserted monotonicity and maximum $(r/(aye))^r$. To bound the discrete sum, use $g(n)\le\int_n^{n+1}g(t)\,dt$ on the increasing side and $g(n)\le\int_{n-1}^n g(t)\,dt$ on the decreasing side; at most two indices adjacent to the maximum remain. Thus
> $$
> \sum_{n\ge1}n^re^{-ayn}\le\int_0^{\infty}t^re^{-ayt}\,dt+2(r/(aye))^r.
> $$
> Substituting $u=ayt$ gives
> $$
> \int_0^{\infty}t^re^{-ayt}\,dt=(ay)^{-r-1}\int_0^{\infty}u^re^{-u}\,du.
> $$
> The latter integral converges because $r>0$ and exponential decay controls infinity. Consequently
> $$
> |f(x+iy)|\le C_0+C(y^{-r-1}+y^{-r})
> \le A+B y^{-R},\qquad R=r+1,
> $$
> for all $y>0$, after enlarging $A,B$: for $y\le1$ the first inverse power dominates; for $y\ge1$ both are bounded. This is the global estimate needed in (b). The printed large-$y$ conclusion also follows from the preceding bound, but alone would be insufficient.
>
> **(b): periodicity and holomorphy.** The slash rule $f[\gamma\gamma']_k=(f[\gamma]_k)[\gamma']_k$ implies that $F=f[\alpha]_k$ is invariant under $\alpha^{-1}\Gamma\alpha$. This group contains $\Gamma(N)$ by normality, so $F(\tau+N)=F(\tau)$. The nonvanishing automorphy factor and the holomorphic fractional linear map show that $F$ is holomorphic on $\mathcal H$. It therefore defines a holomorphic function $H(q_N)$ on $0<|q_N|<1$.
>
> If $c=0$, then $\alpha=\pm\begin{pmatrix}1&b\\0&1\end{pmatrix}$ for an integer $b$ (with $b$ chosen according to the sign); hence $F$ is a sign times a translate of $f$ and has no negative Fourier powers.
>
> Suppose $c\ne0$. By periodicity restrict $0\le x\le N$. Uniformly on this strip, for $y\ge1$ there are positive constants $A_1,A_2$ with $A_1y\le|c\tau+d|\le A_2y$. The imaginary-part formula and (a) imply
> $$
> |F(\tau)|
> \le |c\tau+d|^{-k}\left(A+B\left(\frac{|c\tau+d|^2}{y}\right)^R\right)
> \le C(y^{-k}+y^{R-k}).
> $$
> This bound also holds for negative integral $k$, with constants adjusted using both bounds on $|c\tau+d|$. Since $|q_N|=e^{-2\pi y/N}$, it follows that $q_NH(q_N)\to0$ uniformly in its argument as $q_N\to0$. Equivalently, substitute $y=(N/(2\pi))\log(1/|q_N|)$; positive powers of $|q_N|$ dominate all powers of its logarithm.
>
> By the removable singularity theorem, $q_NH(q_N)$ extends holomorphically to $0$ with value $0$. Its Taylor series is divisible by $q_N$, so $H$ itself extends holomorphically. Thus $f[\alpha]_k$ is holomorphic at every cusp, proving Proposition 1.2.4.
>
> The elementary limit used here can be checked without asymptotic notation: for any real $s$, choose an integer $m>s$. The exponential series gives $e^{ay/2}\ge(ay/2)^m/m!$, and hence $y^se^{-ay}\to0$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Cusp Forms|Cusp Forms]]

## Notes

The exercise, Proposition 1.2.4 and Appendix A hint were visually verified. This is an independent proof; the source states the proposition and assigns this proof as an exercise. External complex-analysis inputs are Laurent expansion and the removable singularity theorem. The proof treats all integral weights and uses the corrected global growth estimate.
