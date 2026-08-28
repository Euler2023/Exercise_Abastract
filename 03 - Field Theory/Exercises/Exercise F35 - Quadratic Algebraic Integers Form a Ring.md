---
title: "Exercise F35: Quadratic Algebraic Integers Form a Ring"
topic: field-theory
difficulty: intermediate
status: not-started
tags:
  - exercise
  - field-theory
  - algebraic-integers
  - quadratic-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, Quadratic Number Fields, Section 1, Algebraic Integers, Ex. 1.2, printed p. 408, PDF p. 420"
created: 2026-08-28
---

# Exercise F35: Quadratic Algebraic Integers Form a Ring

## Problem Statement

> [!question] Exercise 1.2
> Prove that the integers in $\mathbb Q[\sqrt d]$ form a ring.

## Hints

> [!hint]- Hint 1
> Reduce $d$ to its square-free part and use the two integral bases distinguished by $d$ modulo $4$.

> [!hint]- Hint 2
> When $d\equiv1\pmod4$, put $\eta=(1+\sqrt d)/2$ and compute $\eta^2$ as an integer combination of $1$ and $\eta$.

## Solution

> [!success]- Solution
> Replacing $d$ by its square-free part does not change the field, so assume $d$ is square-free. If $d\equiv2$ or $3\pmod4$, the algebraic integers are
>
> $$
> \mathcal O_K=\mathbb Z[\sqrt d].
> $$
>
> This set contains $0$ and $1$ and is visibly closed under addition, additive inverses, and multiplication.
>
> If $d\equiv1\pmod4$, put
>
> $$
> \eta=\frac{1+\sqrt d}{2},
> \qquad
> h=\frac{1-d}{4}\in\mathbb Z.
> $$
>
> The algebraic integers are $\mathcal O_K=\mathbb Z[\eta]$, and $\eta$ satisfies
>
> $$
> \eta^2-\eta+h=0,
> \qquad\text{so}\qquad
> \eta^2=\eta-h.
> $$
>
> Therefore, for integers $a,b,c,e$,
>
> $$
> (a+b\eta)(c+e\eta)
> =(ac-beh)+(ae+bc+be)\eta,
> $$
>
> which again lies in $\mathbb Z[\eta]$. Addition and additive inverses are immediate. Hence the algebraic integers in $\mathbb Q(\sqrt d)$ form a subring of the field.

## Related Concepts

- [[03 - Field Theory/Concepts/Quadratic Number Fields and Rings of Integers|Quadratic Number Fields and Rings of Integers]]
- [[02 - Ring Theory/Concepts/Subrings|Subrings]]

## Notes

- **Routing:** Field Theory is primary because the two integral bases of a quadratic field determine the ring explicitly.
- **Notation:** The source writes $\mathbb Q[\sqrt d]$; because $\sqrt d$ is algebraic, this equals the field $\mathbb Q(\sqrt d)$.
- **Source status:** The problem is from [S1, Ch. 13, §13.1, Ex. 1.2, printed p. 408, PDF p. 420]. The two-case closure proof is independent and uses Proposition 13.1.6 from the bounded source slice.
