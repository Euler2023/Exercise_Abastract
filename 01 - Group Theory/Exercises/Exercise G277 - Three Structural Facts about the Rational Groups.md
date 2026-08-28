---
title: "Exercise G277: Three Structural Facts about the Rational Groups"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - rational-numbers
  - divisible-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 14, Linear Algebra in a Ring, Miscellaneous Problem M.10, printed p. 441, PDF p. 453"
created: 2026-08-28
---

# Exercise G277: Three Structural Facts about the Rational Groups

## Problem Statement

> [!question] Miscellaneous Problem M.10
> **(a)** Prove that the multiplicative group $\mathbb Q^\times$ is isomorphic to the direct sum of a cyclic group of order $2$ and a free abelian group with countably many generators.
>
> **(b)** Prove that the additive group $\mathbb Q^+$ is not a direct sum of two proper subgroups.
>
> **(c)** Prove that the quotient group $\mathbb Q^+/\mathbb Z^+$ is not a direct sum of cyclic groups.

## Hints

> [!hint]- Hint 1
> For (a), use the sign and prime valuations. For (b), classify additive endomorphisms of $\mathbb Q$. For (c), use divisibility.

## Solution

> [!success]- Solution
> **(a)** Every nonzero rational has a unique factorization
>
> $$
> q=(-1)^\epsilon\prod_p p^{n_p},
> $$
>
> where $\epsilon\in\{0,1\}$, $n_p\in\mathbb Z$, and only finitely many $n_p$ are nonzero. Hence
>
> $$
> \boxed{\mathbb Q^\times\cong C_2\oplus\bigoplus_{p\text{ prime}}\mathbb Z.}
> $$
>
> **(b)** Every additive endomorphism $f:\mathbb Q\to\mathbb Q$ is multiplication by $f(1)\in\mathbb Q$: the equation $n f(m/n)=m f(1)$ forces this. If $\mathbb Q=A\oplus B$, projection onto $A$ is an idempotent endomorphism, hence multiplication by a rational $r$ with $r^2=r$. Thus $r=0$ or $1$, so one summand is zero and the other all of $\mathbb Q$. No decomposition into two proper subgroups exists.
>
> **(c)** The group $\mathbb Q/\mathbb Z$ is nonzero, torsion, and divisible: multiplication by every positive integer is surjective. If it were a direct sum of cyclic groups, every cyclic direct summand would be a quotient of a divisible group and hence divisible. But every cyclic torsion group is finite, and no nonzero finite cyclic group is divisible. Thus all summands would be zero, a contradiction. Therefore $\mathbb Q/\mathbb Z$ is not a direct sum of cyclic groups.

## Related Concepts

- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]
- [[01 - Group Theory/Concepts/Direct Products|Direct Products]]
- [[04 - Linear Algebra and Modules/Concepts/Torsion Modules|Torsion Modules]]

## Notes

- **Routing:** Group Theory is primary because prime valuations, idempotent projections, and divisibility establish three group-structure results.
- **Notation:** The superscript $+$ denotes the additive group, not the positive rationals.
- **Source status:** [S1, Ch. 14, Misc. M.10, printed p. 441, PDF p. 453]. The three proofs are independent.
