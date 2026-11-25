---
title: "Exercise LA679: Nilpotence of Strictly Upper Triangular Matrices"
topic: linear-algebra
difficulty: intermediate
status: not-started
tags:
  - exercise
  - linear-algebra
source: "Brian C. Hall, Lie Groups, Lie Algebras, and Representations: An Elementary Introduction, 2nd ed., corrected publication, GTM 222, Springer, 2015, Ch. 3, Section 3.9, Exercise 3, printed p. 73, PDF p. 85"
source_refs:
  - "S10/ch-3/sec-9/ex-3"
created: 2026-11-25
---

# Exercise LA679: Nilpotence of Strictly Upper Triangular Matrices

## Problem Statement

> [!question] Original Chapter 3, Exercise 3
> Let $\mathfrak g$ denote the space of $n\times n$ upper triangular matrices with zeros on the diagonal. Show that $\mathfrak g$ is a nilpotent Lie algebra under the bracket given by $[X,Y]=XY-YX$.

## Hints

> [!hint]- Hint 1
> Track which superdiagonals can carry nonzero entries in a product $AB$.

> [!hint]- Hint 2
> Let $F_r$ consist of matrices whose $(i,j)$ entry vanishes when $j-i<r$. Show that $F_rF_s\subseteq F_{r+s}$ and apply this to the iterated bracket spaces.

## Solution

> [!success]- Solution
> **Proof scope:** Independent argument using the filtration by superdiagonal distance. Hall's matrix commutator construction is the only imported Lie algebra result [S10, §3.1, Example 3.3, printed p. 50, PDF p. 62].
>
> For each positive integer $r$, let $F_r$ be the subspace of matrices $A$ such that $A_{ij}=0$ whenever $j-i<r$. We have $\mathfrak g=F_1$ and $F_n=0$.
>
> If $A\in F_r$ and $B\in F_s$, a nonzero summand $A_{ik}B_{kj}$ of $(AB)_{ij}$ requires both $k-i\ge r$ and $j-k\ge s$. Adding gives $j-i\ge r+s$. Thus $AB\in F_{r+s}$. The same reasoning gives $BA\in F_{r+s}$, so $[A,B]\in F_{r+s}$. In particular, $[\mathfrak g,\mathfrak g]\subseteq F_2\subseteq F_1$. The commutator construction therefore makes $\mathfrak g$ a Lie algebra.
>
> Set $C_1=\mathfrak g$ and $C_{r+1}=[\mathfrak g,C_r]$, where the bracket of subspaces denotes the span of all such brackets. We prove $C_r\subseteq F_r$ by induction. The base is $C_1=F_1$. If $C_r\subseteq F_r$, then
> $$
> C_{r+1}=[F_1,C_r]\subseteq[F_1,F_r]\subseteq F_{r+1}.
> $$
> Hence $C_n\subseteq F_n=0$, including $n=1$, when $\mathfrak g=0$ from the outset. The lower central series terminates, which is the nilpotence criterion.

## Related Concepts

- [[06 - Representation Theory/Concepts/Lie Algebras|Lie Algebras]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]

## Notes

- **Source status:** The exercise was checked against the 200 dpi rendering of printed p. 73 / PDF p. 85. Hall does not name the scalar field here. The argument applies to both real and complex matrices.
- **Terminology:** Hall calls the descending sequence $\mathfrak g^0=\mathfrak g$, $\mathfrak g^{j+1}=[\mathfrak g,\mathfrak g^j]$ the “upper central series” [S10, §3.2, Definition 3.15, printed p. 54, PDF p. 66]. It is the lower central series in the usual terminology, with $\mathfrak g^j=C_{j+1}$ in our indexing.
- **Concrete verification:** For $n=3$, matrix units satisfy $[E_{12},E_{23}]=E_{13}$. Thus $C_2=\mathbb F E_{13}$ over the chosen field $\mathbb F$, and $C_3=0$.
- **Routing:** The main calculation is the entrywise support estimate for matrix products.
- **Archive navigation:** [[00 - Home/Hall Lie Groups Exercise Archive|Hall Lie Groups Exercise Archive]].
