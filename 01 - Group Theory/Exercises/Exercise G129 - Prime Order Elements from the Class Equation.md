---
title: "Exercise G129: Prime Order Elements from the Class Equation"
topic: group-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - group-theory
  - class-equation
  - finite-groups
source: "Michael Artin, Algebra, 2nd ed., Ch. 7, Section 2, Ex. 2.17, printed p. 222, PDF p. 234"
created: 2026-08-24
---

# Exercise G129: Prime Order Elements from the Class Equation

## Problem Statement

> [!question] Exercise 2.17
> Use the class equation to show that a group of order $pq$, with $p$ and $q$ prime, contains an element of order $p$.

## Hints

> [!hint]- Hint 1
> Assume there is no element of order $p$. If the center is nontrivial, use a central element and the quotient by its cyclic subgroup.

> [!hint]- Hint 2
> If the center is trivial, every nonidentity centralizer has order $q$, so every nontrivial conjugacy class has size $p$.

## Solution

> [!success]- Solution
> If $p=q$, any nonidentity element has order $p$ or $p^2$; in the latter case its $p$th power has order $p$. Assume $p\ne q$ and, for contradiction, that $G$ has no element of order $p$.
>
> If $Z(G)$ contains $z\ne1$, then $z$ has order $q$ unless its order is $pq$, in which case a power of $z$ has order $p$. Thus $\langle z\rangle$ has order $q$. The quotient $G/\langle z\rangle$ has order $p$. For $x\notin\langle z\rangle$, the coset $x\langle z\rangle$ has order $p$. Hence $x^p\in\langle z\rangle$. The order of $x$ cannot be $q$, since then its image in the quotient would have order dividing both $p$ and $q$; therefore $x$ has order $pq$, and $x^q$ has order $p$, again a contradiction.
>
> It remains to consider $Z(G)=\{1\}$. Under the assumption, every nonidentity element has order $q$; an element of order $pq$ would again have a power of order $p$. Its centralizer is a proper subgroup containing its cyclic subgroup of order $q$, so it has order $q$. Every nonidentity conjugacy class consequently has size $p$. The class equation would read
>
> $$
> pq=1+kp
> $$
>
> for some integer $k$, which is impossible modulo $p$. Thus $G$ contains an element of order $p$. $\square$

## Related Concepts

- [[01 - Group Theory/Concepts/Conjugacy Classes Centralizers and the Class Equation|Conjugacy Classes, Centralizers, and the Class Equation]]
- [[01 - Group Theory/Concepts/Quotient Groups|Quotient Groups]]
- [[01 - Group Theory/Concepts/Cyclic Groups|Cyclic Groups]]

## Notes

- This is the order-$pq$ case of Cauchy's theorem, proved here without using the Sylow theorems developed later in Chapter 7.
- **Source status:** [S1, Ch. 7, §2, Ex. 2.17, printed p. 222, PDF p. 234]; independent proof.

