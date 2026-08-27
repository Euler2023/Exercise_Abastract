---
title: "Exercise R77: Chinese Remainder Theorem for Comaximal Ideals"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - chinese-remainder-theorem
  - ideals
  - idempotents
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §6, Ex. 6.8, printed pp. 356–357, PDF pp. 368–369"
created: 2026-08-27
---

# Exercise R77: Chinese Remainder Theorem for Comaximal Ideals

## Problem Statement

> [!question] Exercise 6.8
> Let $I,J$ be ideals of $R$ such that $I+J=R$.
>
> **(a)** Prove $IJ=I\cap J$.
>
> **(b)** For $a,b\in R$, prove that some $x$ satisfies $x\equiv a\pmod I$ and $x\equiv b\pmod J$.
>
> **(c)** Prove that if $IJ=0$, then $R\cong(R/I)\times(R/J)$.
>
> **(d)** Describe the idempotents corresponding to the product decomposition in (c).

## Hints

> [!hint]- Hint 1
> Choose $u\in I$, $v\in J$ with $u+v=1$.

## Solution

> [!success]- Solution
> Choose $u\in I$, $v\in J$ with $u+v=1$.
>
> **(a)** For $z\in I\cap J$,
>
> $$
> z=z(u+v)=zu+zv\in IJ.
> $$
>
> Together with $IJ\subseteq I\cap J$, this gives equality.
>
> **(b)** Set $x=av+bu$. Then $v\equiv1\pmod I$, $u\equiv0\pmod I$, so $x\equiv a\pmod I$; similarly $x\equiv b\pmod J$.
>
> **(c)** The map $R\to R/I\times R/J$ is surjective by (b) and has kernel $I\cap J=IJ=0$, hence is an isomorphism.
>
> **(d)** Under the isomorphism, $v$ corresponds to $(1,0)$ and $u$ to $(0,1)$. Since $IJ=0$, one checks $u^2=u$, $v^2=v$, $uv=0$, and $u+v=1$.

## Related Concepts

- [[02 - Ring Theory/Concepts/Product Rings and the Chinese Remainder Theorem|Product Rings and the Chinese Remainder Theorem]]
- [[02 - Ring Theory/Concepts/Nilpotent and Idempotent Elements|Nilpotent and Idempotent Elements]]
- [[02 - Ring Theory/Exercises/Exercise R28 - Chinese Remainder Theorem for Two Coprime Moduli|Exercise R28]]

## Notes

- **Duplicate boundary:** R28 treats explicit integer congruences; this exercise proves the general ideal-theoretic theorem and its idempotent decomposition.
- **Source status:** The multipart problem spans [S1, Ch. 11, §6, Ex. 6.8, printed pp. 356–357, PDF pp. 368–369]. The proof is independent.

