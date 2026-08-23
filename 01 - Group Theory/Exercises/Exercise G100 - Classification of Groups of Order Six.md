---
title: "Exercise G100: Classification of Groups of Order Six"
topic: group-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - group-theory
  - finite-groups
  - classification
  - symmetric-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Miscellaneous Problems, Ex. M.3, printed p. 75, PDF p. 87"
created: 2026-08-23
---

# Exercise G100: Classification of Groups of Order Six

## Problem Statement

> [!question] Exercise M.3
> Classify groups of order $6$ by analyzing the following three cases:
> 
> **(i)** $G$ contains an element of order $6$.
> 
> **(ii)** $G$ contains an element of order $3$ but none of order $6$.
> 
> **(iii)** All elements of $G$ have order $1$ or $2$.

## Hints

> [!hint]- Hint 1
> Case (i) is cyclic.

> [!hint]- Hint 2
> In case (ii), let $a$ have order $3$ and choose $b\notin\langle a\rangle$; determine $bab^{-1}$.

> [!hint]- Hint 3
> A finite group in which every element is an involution is abelian.

## Solution

> [!success]- Solution
> In case (i), $G\cong C_6$.
> 
> In case (ii), $H=\langle a\rangle$ has index $2$, hence is normal. Choose $b\notin H$. Its order cannot be $3$: otherwise $\langle a\rangle$ and $\langle b\rangle$ would be distinct order-$3$ subgroups with trivial intersection, and their product set would have $9$ elements inside a group of order $6$. By hypothesis its order is not $6$, so $b$ has order $2$. The conjugate $bab^{-1}$ is a nonidentity element of $H$. It cannot equal $a$, because then commuting elements $a$ and $b$ of orders $3$ and $2$ would make $ab$ have order $6$. Thus
> 
> $$
> bab^{-1}=a^{-1}.
> $$
> 
> The six elements are $1,a,a^2,b,ab,a^2b$, with the defining relations of $S_3$. Hence $G\cong S_3$.
> 
> Case (iii) cannot occur. If every element squares to $1$, then
> 
> $$
> xy=(xy)^{-1}=y^{-1}x^{-1}=yx,
> $$
> 
> so $G$ is abelian of exponent $2$. Such a finite group is a vector space over $\mathbb F_2$ and therefore has order a power of $2$, not $6$.
> 
> Consequently the groups of order $6$ are, up to isomorphism, $C_6$ and $S_3$.

## Related Concepts

- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]
- [[01 - Group Theory/Concepts/Normal Subgroups|Normal Subgroups]]

## Notes

- **Source status:** The problem statement is transcribed from [S1, Ch. 2, Misc. Problems, Ex. M.3, printed p. 75, PDF p. 87]. The solution is an independent derivation for this vault, not a solution printed in Artin.
