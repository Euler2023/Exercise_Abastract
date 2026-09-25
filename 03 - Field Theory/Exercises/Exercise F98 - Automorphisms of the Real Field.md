---
title: "Exercise F98: Automorphisms of the Real Field"
topic: field-theory
difficulty: beginner
status: not-started
tags:
  - exercise
  - field-theory
  - ordered-fields
  - lang-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XI, Exercise 4, printed p. 462, PDF p. 477"
created: 2026-09-25
---

# Exercise F98: Automorphisms of the Real Field

## Problem Statement

> [!question] Lang, Chapter XI, Exercise 4
> Show that the field of real numbers has only the identity automorphism. *Hint:* Show that an automorphism preserves the ordering.

## Hints

> [!hint]- Hint 1
> A real number is positive if and only if it is a nonzero square in $\mathbb R$.

> [!hint]- Hint 2
> A field automorphism fixes $\mathbb Q$ pointwise. Compare an arbitrary real number and its image with every rational number.

## Solution

> [!success]- Independently derived solution
> Let $\varphi:\mathbb R\to\mathbb R$ be a field automorphism. If $x>0$, then $x=y^2$ for some $y\in\mathbb R^\times$. Thus $\varphi(x)=\varphi(y)^2>0$. For any $a<b$, the difference $b-a$ is positive, so
> $$
> \varphi(b)-\varphi(a)=\varphi(b-a)>0.
> $$
> Hence $\varphi$ is strictly order preserving.
>
> Every field automorphism fixes $1$, hence every integer and rational number. If $\varphi(x)>x$ for some $x\in\mathbb R$, choose $q\in\mathbb Q$ with $x<q<\varphi(x)$. Order preservation gives $\varphi(x)<\varphi(q)=q$, a contradiction. If $\varphi(x)<x$, choose $q\in\mathbb Q$ with $\varphi(x)<q<x$; applying $\varphi$ to $q<x$ gives $q=\varphi(q)<\varphi(x)$, another contradiction. Therefore $\varphi(x)=x$ for every real $x$, so $\varphi$ is the identity.

## Related Concepts

- [[03 - Field Theory/Concepts/Ordered and Real Closed Fields|Ordered and Real Closed Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]

## Notes

- **Source status:** The complete statement and hint were visually checked at [S2, Ch. XI, Ex. 4, printed p. 462, PDF p. 477]. The proof above is independent.
- **Method boundary:** The step from order preservation to the identity uses the order density of $\mathbb Q$ in $\mathbb R$. A general ordered field need not have this property relative to its prime field.
