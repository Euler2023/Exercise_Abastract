---
title: "Exercise R161: Failure of the Main Lemma in a Nonmaximal Order"
topic: ring-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - ring-theory
  - nonmaximal-orders
  - ideal-products
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 5, Factoring Ideals, Ex. 5.2, printed p. 409, PDF p. 421"
created: 2026-08-28
---

# Exercise R161: Failure of the Main Lemma in a Nonmaximal Order

## Problem Statement

> [!question] Exercise 5.2
> Let $\delta=\sqrt{-3}$ and $R=\mathbb Z[\delta]$. This is not the ring of integers in the imaginary quadratic number field $\mathbb Q[\delta]$. Let $A$ be the ideal $(2,1+\delta)$.
>
> **(a)** Prove that $A$ is a maximal ideal, and identify the quotient ring $R/A$.
>
> **(b)** Prove that $\overline A A$ is not a principal ideal, and that the Main Lemma is not true for this ring.
>
> **(c)** Prove that $A$ contains the principal ideal $(2)$ but that $A$ does not divide $(2)$.

## Hints

> [!hint]- Hint 1
> Reduce $a+b\delta$ modulo $A$ by sending $\delta$ to $1$ in $\mathbb F_2$.

> [!hint]- Hint 2
> Show that $\overline A=A$ and $A^2=2A=(4,2+2\delta)$. Use its lattice index to rule out a principal generator.

## Solution

> [!success]- Solution
> **(a)** Define
>
> $$
> \varphi:R\longrightarrow\mathbb F_2,
> \qquad
> \varphi(a+b\delta)=a+b\pmod2.
> $$
>
> This is a ring homomorphism because $\delta^2=-3\equiv1$ in $\mathbb F_2$. Its kernel consists of pairs with $a+b$ even, equivalently $a\equiv b\pmod2$, which is precisely the lattice $(2,1+\delta)$. Hence
>
> $$
> R/A\cong\mathbb F_2.
> $$
>
> The quotient is a field, so $A$ is maximal.
>
> **(b)** Since $1-\delta=2-(1+\delta)$, conjugation fixes $A$. Multiplication gives
>
> $$
> \overline A A=A^2
> =(4,2+2\delta,-2+2\delta)
> =(4,2+2\delta)
> =2A.
> $$
>
> The displayed lattice basis has determinant $8$ in the basis $(1,\delta)$, so $[R:A^2]=8$. If $A^2=(a+b\delta)$ were principal, its index would be the absolute norm
>
> $$
> a^2+3b^2=8.
> $$
>
> This equation has no integer solution: $b=0$ gives $a^2=8$, and $|b|=1$ gives $a^2=5$. Thus $\overline A A$ is not principal. The Main Lemma for full rings of integers asserts that such a conjugate product is principal, so it fails in this smaller order.
>
> **(c)** Since $2$ is one of the generators of $A$, $(2)\subset A$. Suppose for contradiction that $(2)=AC$ for some ideal $C$. For $c=a+b\delta\in C$, the inclusion $(1+\delta)c\in2R$ forces
>
> $$
> (1+\delta)(a+b\delta)=(a-3b)+(a+b)\delta
> $$
>
> to have both coefficients even. This is equivalent to $a\equiv b\pmod2$, so $c\in A$. Hence $C\subseteq A$, and therefore
>
> $$
> AC\subseteq A^2=2A\subsetneq2R=(2),
> $$
>
> contradicting $(2)=AC$. Thus $A$ contains $(2)$ but does not divide it.

## Related Concepts

- [[02 - Ring Theory/Concepts/Prime and Maximal Ideals|Prime and Maximal Ideals]]
- [[02 - Ring Theory/Concepts/Ideals|Ideals]]
- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]

## Notes

- **Routing:** Ring Theory is primary because quotient ideals, conjugate products, principality, and ideal divisibility expose the failure.
- **Order boundary:** The full ring of integers is $\mathbb Z[(1+\sqrt{-3})/2]$; the missing half-integers are exactly why the Main Lemma cannot be applied to $R$.
- **Source status:** The problem is from [S1, Ch. 13, §13.5, Ex. 5.2, printed p. 409, PDF p. 421]. All quotient, index, and nondivisibility arguments are independent.
