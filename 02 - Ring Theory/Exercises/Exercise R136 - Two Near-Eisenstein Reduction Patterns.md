---
title: "Exercise R136: Two Near-Eisenstein Reduction Patterns"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - eisenstein-criterion
  - reduction-modulo-primes
source: "Michael Artin, Algebra, 2nd ed., Ch. 12, Factoring, Section 4, Factoring Integer Polynomials, Ex. 4.15, printed p. 380, PDF p. 392"
created: 2026-08-28
---

# Exercise R136: Two Near-Eisenstein Reduction Patterns

## Problem Statement

> [!question] Exercise 4.15
> With reference to the Eisenstein criterion, what can one say when
>
> **(a)** $\overline f$ is constant;
>
> **(b)** $\overline f=x^n+\overline b x^{n-1}$?

## Hints

> [!hint]- Hint 1
> In part (a), reverse the coefficients by considering $f^*(x)=x^n f(1/x)$.

> [!hint]- Hint 2
> In part (b), reduce a hypothetical factorization modulo $p$ and track which factors are divisible by $x$.

## Solution

> [!success]- Solution
> Let $f=a_nx^n+\cdots+a_0\in\mathbb Z[x]$ be primitive, and let the bar denote reduction modulo a prime $p$.
>
> **(a)** Suppose $\overline f=\overline{a_0}\neq0$ is constant. Then $p$ divides $a_1,\ldots,a_n$ but not $a_0$. The reciprocal polynomial
>
> $$
> f^*(x)=x^n f(1/x)
> =a_0x^n+a_1x^{n-1}+\cdots+a_n
> $$
>
> satisfies the first two Eisenstein conditions at $p$. If, in addition,
>
> $$
> p^2\nmid a_n,
> $$
>
> then $f^*$ is Eisenstein and irreducible. Taking reciprocals preserves a proper factorization because $a_0a_n\neq0$, so $f$ is irreducible as well.
>
> **(b)** Suppose
>
> $$
> \overline f=x^{n-1}(x+\overline b),
> \qquad \overline b\neq0,
> $$
>
> and suppose $p^2\nmid a_0$. If $f=gh$ were a proper factorization in $\mathbb Z[x]$, degrees would be preserved on reduction because the leading coefficient of $\overline f$ is nonzero. Every irreducible factor of $\overline g$ or $\overline h$ is either $x$ or $x+\overline b$.
>
> If both $\overline g$ and $\overline h$ were divisible by $x$, then $p$ would divide both constant coefficients, forcing $p^2\mid a_0$, a contradiction. Therefore one reduced factor is not divisible by $x$. It must be an associate of the single factor $x+\overline b$, so the corresponding factor of $f$ has degree $1$.
>
> Consequently, under the stated nondivisibility condition, any reducible $f$ has a rational linear factor. If $f$ has no rational root, it is irreducible. When $\overline b=0$, this reduces to the usual Eisenstein situation.
>
> The shapes of $\overline f$ alone are not sufficient: the relevant coefficient must also fail to be divisible by $p^2$, exactly as in Eisenstein's criterion.

## Related Concepts

- [[02 - Ring Theory/Concepts/Unique Factorization Domains|Unique Factorization Domains]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]

## Notes

- **Routing:** Ring Theory is primary because reductions of hypothetical factors yield refined irreducibility tests.
- **Hypothesis boundary:** The conclusions explicitly retain the $p^2$ nondivisibility condition; omitting it would overstate what the reduction shape proves.
- **Source status:** The exploratory question is from [S1, Ch. 12, §12.4, Ex. 4.15, printed p. 380, PDF p. 392]. The precise formulations and proofs are independent.

