---
title: "Exercise R68: Universal Inversion of One Element"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - localization
  - nilpotents
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §5, Ex. 5.6, printed p. 356, PDF p. 368"
created: 2026-08-27
---

# Exercise R68: Universal Inversion of One Element

## Problem Statement

> [!question] Exercise 5.6
> Let $a\in R$, and let $R'=R[x]/(ax-1)$ be obtained by adjoining an inverse $\alpha$ of $a$.
>
> **(a)** Show that every $\beta\in R'$ can be written $\beta=\alpha^k b$ with $b\in R$.
>
> **(b)** Prove that the kernel of $R\to R'$ is the set of $b\in R$ such that $a^n b=0$ for some $n>0$.
>
> **(c)** Prove that $R'$ is the zero ring if and only if $a$ is nilpotent.

## Hints

> [!hint]- Hint 1
> Put every polynomial in $\alpha$ over a common denominator $a^k$.

> [!hint]- Hint 2
> If a constant polynomial belongs to $(ax-1)$, compare coefficients or clear the highest power of $x$.

## Solution

> [!success]- Solution
> **(a)** For $\beta=\sum_{i=0}^k r_i\alpha^i$, use $a\alpha=1$ to obtain
>
> $$
> \beta=\alpha^k\sum_{i=0}^k r_i a^{k-i}.
> $$
>
> **(b)** If $a^n b=0$, then $b=\alpha^n a^n b=0$ in $R'$. Conversely, suppose
>
> $$
> b=(ax-1)(c_0+c_1x+\cdots+c_mx^m).
> $$
>
> Comparing coefficients gives $b=-c_0$, $c_{j+1}=ac_j$ for $0\le j<m$, and $ac_m=0$. Hence $c_m=a^m c_0$ and $a^{m+1}b=0$. Thus the kernel is exactly the $a$-power torsion.
>
> **(c)** The quotient is zero exactly when $1$ lies in that kernel. By (b), this is equivalent to $a^n=0$ for some $n$, namely to $a$ being nilpotent.

## Related Concepts

- [[02 - Ring Theory/Concepts/Localization and Laurent Polynomials|Localization and Laurent Polynomials]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]

## Notes

- **Source status:** The problem is from [S1, Ch. 11, §5, Ex. 5.6, printed p. 356, PDF p. 368]. The localization argument is independent.
