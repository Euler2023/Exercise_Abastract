---
title: "Exercise LA344: A Rank Drop in the Printed Quadratic-Module Example"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - source-issue
  - quadratic-ideals
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Section 9, Polynomial Rings in Several Variables, Ex. 9.5, printed p. 440, PDF p. 452"
created: 2026-08-28
---

# Exercise LA344: A Rank Drop in the Printed Quadratic-Module Example

## Problem Statement

> [!question] Exercise 9.5 — printed statement
> Let $R=\mathbb Z[\sqrt{-5}]$, and let $V$ be the module presented by
>
> $$
> A=\begin{pmatrix}2\\1+\delta\end{pmatrix}.
> $$
>
> Prove that the residue of $A$ in $R/P$ has rank $1$ for every prime ideal $P$ of $R$, but that $V$ is not a free module.

> [!danger] Source issue
> The first requested assertion is false for the printed matrix. The ideal $Q=(2,1+\delta)$ is prime, and both entries of $A$ vanish in $R/Q$, so the residue has rank $0$, not $1$.

## Hints

> [!hint]- Hint 1
> Compute $R/Q$ and then inspect all primes other than $Q$.

## Solution

> [!success]- Analysis of the printed statement
> The quotient map
>
> $$
> R\longrightarrow\mathbb F_2,
> \qquad
> a+b\delta\longmapsto a+b\pmod2
> $$
>
> has kernel $Q=(2,1+\delta)$. Hence $Q$ is maximal and prime. Modulo $Q$,
>
> $$
> \overline A=\begin{pmatrix}0\\0\end{pmatrix},
> $$
>
> so its rank is $0$. For every prime $P\ne Q$, the two entries cannot both belong to $P$: otherwise $Q\subseteq P$, and maximality would force $P=Q$. Thus the correct rank statement for the printed column is
>
> $$
> \operatorname{rank}_{R/P}(\overline A)=
> \begin{cases}
> 0,&P=Q,\\
> 1,&P\ne Q.
> \end{cases}
> $$
>
> The presented module is nevertheless not free. Over the fraction field, the nonzero column has rank one, so $V$ has generic rank one. If $V$ were free, it would be free of rank one and every residue fiber would have dimension one. At $Q$, however,
>
> $$
> V\otimes_RR/Q\cong(R/Q)^2
> $$
>
> has dimension two, because the specialized relation is zero. This contradiction proves nonfreeness.
>
> A genuine constant-rank nonfree example can instead be obtained from the $2\times2$ presentation matrix for the nonprincipal ideal $(2,1+\delta)$ in Exercise 5.1: its determinant is zero, but its entries cannot all lie in one prime because they include both $2$ and $3$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA330 - Presentation of a Nonprincipal Quadratic Ideal|Presentation of a Nonprincipal Quadratic Ideal]]
- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]

## Notes

- **Routing:** Module Theory is primary because specialization of a presentation detects the failure of local freeness.
- **Source issue status:** The printed matrix and claim were checked directly on [S1, Ch. 14, §14.9, Ex. 9.5, printed p. 440, PDF p. 452]. The counterexample prime $Q$ is explicit; the false assertion has not been silently repaired.
- **Corrected scope:** The nonfreeness conclusion is valid for the printed matrix; only the “rank $1$ for every prime” clause fails.
