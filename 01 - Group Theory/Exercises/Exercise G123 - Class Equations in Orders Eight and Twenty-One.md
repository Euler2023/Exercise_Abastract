---
title: "Exercise G123: Class Equations in Orders Eight and Twenty-One"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - class-equation
  - finite-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.8, printed p. 221, PDF p. 233"
created: 2026-08-24
---

# Exercise G123: Class Equations in Orders Eight and Twenty-One

## Problem Statement

> [!question] Exercise 2.8
> Determine the possible class equations of nonabelian groups of order **(a)** $8$, **(b)** $21$.

## Hints

> [!hint]- Hint 1
> For order $8$, the center is nontrivial, but a center of order $4$ would make the quotient cyclic.

> [!hint]- Hint 2
> For order $21$, first show the center is trivial. The remaining class sizes are $3$ or $7$.

## Solution

> [!success]- Solution
> ### (a) Order $8$
> A nontrivial finite $2$-group has nontrivial center. A nonabelian group of order $8$ cannot have center of order $4$, because then $G/Z(G)$ would be cyclic of order $2$, forcing $G$ to be abelian. Hence $|Z(G)|=2$.
>
> A noncentral class has size $2$ or $4$. Size $4$ would give a centralizer of order $2$, but that centralizer contains both $Z(G)$ and the noncentral element, so it cannot equal $Z(G)$. Thus all six noncentral elements occur in classes of size $2$, and the only equation is
>
> $$
> 8=1+1+2+2+2.
> $$
>
> ### (b) Order $21$
> If the center of a nonabelian group had order $3$ or $7$, then the quotient by the center would be cyclic, again forcing the group to be abelian. Thus $Z(G)=\{1\}$.
>
> A nonidentity element cannot have order $21$, since then $G$ would be cyclic. Its centralizer is therefore a proper subgroup whose order is divisible by $3$ or $7$, so a noncentral conjugacy class has size $7$ or $3$. Write the class equation as
>
> $$
> 21=1+3a+7b.
> $$
>
> The unique nonnegative solution of $20=3a+7b$ is $a=b=2$. Hence
>
> $$
> 21=1+3+3+7+7.
> $$
>
> $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Notes

- The two nonabelian groups of order $8$, $D_4$ and the quaternion group, consequently have the same class equation.
- **External standard input:** the center of a finite $p$-group is nontrivial; Artin proves this as Proposition 7.3.1 immediately after the exercise section.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.8, printed p. 221, PDF p. 233]; independent proof.

