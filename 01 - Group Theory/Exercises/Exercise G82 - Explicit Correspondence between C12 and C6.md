---
title: "Exercise G82: Explicit Correspondence between $C_{12}$ and $C_6$"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - correspondence-theorem
  - cyclic-groups
  - quotient-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Section 10, Ex. 10.3, printed p. 74, PDF p. 86"
created: 2026-08-23
---

# Exercise G82: Explicit Correspondence between $C_{12}$ and $C_6$

## Problem Statement

> [!question] Exercise 10.3
> Let $G=\langle x\rangle$ have order $12$, $G'=\langle y\rangle$ have order $6$, and $\varphi(x^i)=y^i$. Exhibit the subgroup correspondence explicitly.

## Hints

> [!hint]- Hint 1
> First compute the kernel, then list the four subgroups of $C_6$.

## Solution

> [!success]- Solution
> The kernel is
> 
> $$
> K=\langle x^6\rangle=\{1,x^6\}.
> $$
> 
> The correspondence between subgroups of $G'$ and subgroups of $G$ containing $K$ is
> 
> $$
> \begin{array}{c|c}
> H'\le G'&\varphi^{-1}(H')\\ \hline
> \{1\}&\langle x^6\rangle\\
> \langle y^3\rangle&\langle x^3\rangle\\
> \langle y^2\rangle&\langle x^2\rangle\\
> \langle y\rangle&\langle x\rangle.
> \end{array}
> $$
> 
> Their respective orders are $(1,2)$, $(2,4)$, $(3,6)$, and $(6,12)$ in the target/source columns.

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Isomorphism Theorems|Isomorphism Theorems]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, §10, Ex. 10.3, printed p. 74, PDF p. 86]. The solution is an independent derivation for this vault, not a solution printed in Artin.
