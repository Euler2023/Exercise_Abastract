---
title: "Exercise MF25: Weight Two Eisenstein Expansions at Levels Two and Four"
topic: modular-forms
difficulty: intermediate
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 1, Section 1.2, Exercise 1.2.9, printed p. 24, PDF p. 39; target expansions, printed p. 19, PDF p. 34; Appendix A hint, printed p. 414, PDF p. 425"
source_refs:
  - "S7/ch-1/sec-2/ex-9"
created: 2026-10-24
---

# Exercise MF25: Weight Two Eisenstein Expansions at Levels Two and Four

## Problem Statement

> [!question] Original Exercise 1.2.9
> Verify the Fourier expansions of $G_{2,2}$ and $G_{2,4}$ given in the section. (A hint for this exercise is at the end of the book.)
>
> **Referenced formulas** (printed pp. 18-19 / PDF pp. 33-34): put $q=e^{2\pi i\tau}$, $\sigma(n)=\sum_{d\mid n,\ d>0}d$, and
> $$
> G_2(\tau)=2\zeta(2)-8\pi^2\sum_{n\ge1}\sigma(n)q^n,
> \qquad G_{2,N}(\tau)=G_2(\tau)-NG_2(N\tau).
> $$
> The expansions to establish are
> $$
> G_{2,2}(\tau)=-\frac{\pi^2}{3}\left(1+24\sum_{n\ge1}\left(\sum_{\substack{0<d\mid n\\d\text{ odd}}}d\right)q^n\right)
> $$
> and
> $$
> G_{2,4}(\tau)=-\pi^2\left(1+8\sum_{n\ge1}\left(\sum_{\substack{0<d\mid n\\4\nmid d}}d\right)q^n\right).
> $$

## Hints

> [!hint]- Hint 1
> Subtract $NG_2(N\tau)$ coefficient by coefficient. A term at $q^n$ in this second series occurs only when $N\mid n$.

> [!hint]- Hint 2
> The divisors of $n$ divisible by $N$ are exactly $Ne$ with $e\mid n/N$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent solution
>
> Define $\sigma(n/N)=0$ when $N\nmid n$. Since $2\zeta(2)=\pi^2/3$, subtraction gives
> $$
> G_{2,N}(\tau)=(1-N)\frac{\pi^2}{3}
> -8\pi^2\sum_{n\ge1}\bigl(\sigma(n)-N\sigma(n/N)\bigr)q^n.
> $$
> The map $e\mapsto Ne$ bijects the positive divisors of $n/N$ with the positive divisors of $n$ divisible by $N$, so
> $$
> \sigma(n)-N\sigma(n/N)=\sum_{\substack{d\mid n\\N\nmid d}}d.
> $$
> For $N=2$ the remaining divisors are odd and the constant term is $-\pi^2/3$, yielding the first formula after factoring out this constant. For $N=4$ the remaining divisors are those not divisible by $4$, and the constant term is $-\pi^2$, yielding the second formula.
>
> For instance, at $n=4$, $\sigma(4)-2\sigma(2)=7-6=1$ and $\sigma(4)-4\sigma(1)=7-4=3$. These match the respective restricted divisor sums $1$ and $1+2=3$ and the coefficients $-8\pi^2$ and $-24\pi^2$.

## Related Concepts

- [[07 - Modular Forms/Concepts/Eisenstein Series|Eisenstein Series]]
- [[07 - Modular Forms/Concepts/Congruence Subgroups|Congruence Subgroups]]
- [[07 - Modular Forms/Concepts/Riemann Zeta Function|Riemann Zeta Function]]

## Notes

The original exercise, the two target expansions, and Appendix A hint (printed p. 414 / PDF p. 425) were visually checked. The independent coefficient calculation imports the Fourier expansion of $G_2$ from Exercise 1.2.8 and $\zeta(2)=\pi^2/6$ from Exercise 1.1.7(b). It establishes the series identities, without re-proving their modularity.
