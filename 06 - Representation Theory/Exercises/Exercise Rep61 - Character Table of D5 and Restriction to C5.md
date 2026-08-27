---
title: "Exercise Rep61: Character Table of D5 and Restriction to C5"
topic: representation-theory
difficulty: advanced
status: not-started
tags: [exercise, representation-theory]
source: "Michael Artin, Algebra, 2nd ed., Ch. 10, Section 4, Ex. 4.4, printed p. 316, PDF p. 328"
created: 2026-08-27
---

# Exercise Rep61: Character Table of D5 and Restriction to C5

## Problem Statement

> [!question] Exercise 4.4
> Let $G=D_5=\langle x,y\mid x^5=y^2=1,\ yxy^{-1}=x^{-1}\rangle$, and let $\chi$ be an arbitrary two-dimensional character of $G$.
>
> **(a)** What does $x^5=1$ tell us about $\chi(x)$?
> **(b)** What does the fact that $x$ and $x^{-1}$ are conjugate tell us about $\chi(x)$?
> **(c)** Determine the character table of $G$.
> **(d)** Decompose the restriction of each irreducible character of $D_5$ into irreducible characters of $C_5$.

## Hints

> [!hint]- Hint 1
> The eigenvalues of $\rho(x)$ are fifth roots and occur as an inverse pair.

## Solution

> [!success]- Solution
> **(a)** The eigenvalues of $\rho(x)$ are fifth roots of unity, so $\chi(x)$ is a sum of two fifth roots. **(b)** Conjugacy gives $\chi(x)=\chi(x^{-1})=\overline{\chi(x)}$, so it is real; for a nontrivial irreducible it is $\zeta^k+\zeta^{-k}$.
>
> Put $a=\zeta+\zeta^{-1}$ and $b=\zeta^2+\zeta^{-2}$, with $\zeta=e^{2\pi i/5}$. On classes $1$, $\{x,x^{-1}\}$, $\{x^2,x^{-2}\}$, and the five reflections, the table is
>
> $$
> \begin{array}{c|rrrr}
> &1&x&x^2&y\\\hline
> 1&1&1&1&1\\
> \varepsilon&1&1&1&-1\\
> \rho_1&2&a&b&0\\
> \rho_2&2&b&a&0
> \end{array}.
> $$
>
> If $\lambda_k(x)=\zeta^k$, then
>
> $$
> \operatorname{res}1=\operatorname{res}\varepsilon=\lambda_0,
> \quad \operatorname{res}\rho_1=\lambda_1\oplus\lambda_4,
> \quad \operatorname{res}\rho_2=\lambda_2\oplus\lambda_3.
> $$
>
> $\square$

## Related Concepts

- [[06 - Representation Theory/Concepts/Characters|Characters]]
- [[01 - Group Theory/Concepts/Dihedral Groups|Dihedral Groups]]

## Notes

- **Source status:** [S1, Ch. 10, §4, Ex. 4.4, printed p. 316, PDF p. 328]; table and restrictions are independent.

