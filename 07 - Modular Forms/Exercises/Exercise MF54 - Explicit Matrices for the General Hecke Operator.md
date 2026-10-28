---
title: "Exercise MF54: Explicit Matrices for the General Hecke Operator"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 5, Section 5.3, Exercise 5.3.1, printed p. 181, PDF p. 195"
source_refs:
  - "S7/ch-5/sec-3/ex-1"
created: 2026-10-28
---

# Exercise MF54: Explicit Matrices for the General Hecke Operator

## Problem Statement

> [!question] Original Exercise 5.3.1
> Let $f\in M_k(\Gamma_0(N))$. For each $n\in\mathbb Z^+$ define
> $$
> S_n=\{d\in\mathbb Z^+:d\mid n,\ \gcd(n/d,N)=1\},
> \qquad M_n=\bigcup_{d\in S_n}\ \bigcup_{j=0}^{d-1}\begin{pmatrix}n/d&j\\0&d\end{pmatrix}.
> $$
> Show that $T_nf=\sum_{\gamma\in M_n}f[\gamma]_k$. (A hint for this exercise is at the end of the book.)

## Hints

> [!hint]- Hint 1
> Sum over $j$ first in the Fourier expansion of $f((a\tau+j)/d)$.

> [!hint]- Hint 2
> Use the geometric sum, then compare each coefficient with (5.14) for the trivial character modulo $N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> We use Proposition 5.3.1 [S7, printed p. 180 / PDF p. 194] as an imported coefficient formula. Its assigned regrouping details are supplied independently in Exercise 5.3.4. Write $f(\tau)=\sum_{r\geq0}a_rq^r$. For a divisor $d\in S_n$ put $a=n/d$. Since the matrix $\gamma_j=\begin{pmatrix}a&j\\0&d\end{pmatrix}$ has determinant $n$,
> $$
> \sum_{j=0}^{d-1}(f[\gamma_j]_k)(\tau)
> =n^{k-1}d^{-k}\sum_{r\geq0}a_re^{2\pi ira\tau/d}
> \sum_{j=0}^{d-1}e^{2\pi irj/d}.
> $$
> The inner finite sum is $d$ if $d\mid r$ and $0$ otherwise: multiply it by $1-e^{2\pi ir/d}$ when that factor is nonzero. Thus the result is
> $$
> n^{k-1}d^{1-k}\sum_{u\geq0}a_{du}q^{au}
> =a^{k-1}\sum_{u\geq0}a_{du}q^{au}.
> $$
> At index $m\geq0$ it contributes $a^{k-1}a_{mn/a^2}$ if $a\mid m$, and zero otherwise. As $d$ runs through $S_n$, $a=n/d$ runs through the divisors of $n$ coprime to $N$. The full coefficient is therefore
> $$
> \sum_{\substack{a\mid(m,n)\\\gcd(a,N)=1}}a^{k-1}a_{mn/a^2}.
> $$
> For $f\in M_k(\Gamma_0(N))$, the character in (5.14) is the principal character $1_N$, equal to $1$ on integers coprime to $N$ and $0$ on the rest. Thus the displayed coefficient is exactly $a_m(T_nf)$. The computation includes $m=0$, since every positive integer divides zero. The Fourier expansions converge on the upper half-plane, so equality of every coefficient proves the required equality of functions.

## Related Concepts

- [[07 - Modular Forms/Concepts/Hecke Operators]]
- [[07 - Modular Forms/Concepts/Cusp Forms]]

## Notes

- **Source status:** The complete original problem was checked on the rendered 200 dpi source pages [S7, Exercise 5.3.1, printed p. 181 / PDF p. 195]. The solution is independently supplied; statements assigned as exercises are not treated as proofs printed in the textbook.
- **Source context:** Proposition 5.3.1 and (5.14) were checked on printed p. 180 / PDF p. 194. Appendix A, printed p. 422 / PDF p. 433, proposes a different proof using products of representative multisets; this note gives a complete coefficient comparison instead.
- **Normalization:** The factor $n^{k-1}d^{-k}$ uses the source's determinant-to-the-power-$k-1$ slash convention, not a unitary normalization.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
