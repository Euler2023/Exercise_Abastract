---
title: Algebraic Closure
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
created: 2026-01-19
---

# Algebraic Closure

## Definitions

> [!info] Definition (Algebraically Closed)
> A field $F$ is **algebraically closed** if every non-constant polynomial in $F[x]$ has a root in $F$.
>
> Equivalently: every polynomial in $F[x]$ splits completely in $F$.

> [!info] Definition (Algebraic Closure)
> An **algebraic closure** of a field $F$, denoted $\overline{F}$, is a field extension that is:
> 1. Algebraic over $F$
> 2. Algebraically closed

## Equivalent Characterizations

> [!tip] A field $K$ is algebraically closed iff:
> 1. Every polynomial in $K[x]$ has a root in $K$
> 2. Every polynomial in $K[x]$ splits in $K$
> 3. Every irreducible polynomial in $K[x]$ has degree 1
> 4. $K$ has no proper algebraic extensions

## Key Properties

1. Every field has an algebraic closure (requires Zorn's Lemma)
2. The algebraic closure is unique up to isomorphism
3. $\overline{F}$ is the smallest algebraically closed field containing $F$
4. $\overline{\overline{F}} = \overline{F}$ (already closed)
5. If $E/F$ is algebraic and $E$ is algebraically closed, then $E = \overline{F}$

## Examples

> [!example] Example 1: $\overline{\mathbb{R}} = \mathbb{C}$
> The algebraic closure of $\mathbb{R}$ is $\mathbb{C}$:
> - $\mathbb{C}$ is algebraic over $\mathbb{R}$ (degree 2)
> - $\mathbb{C}$ is algebraically closed (Fundamental Theorem of Algebra)

> [!example] Example 2: $\overline{\mathbb{Q}}$
> The algebraic closure of $\mathbb{Q}$:
> - Contains all algebraic numbers
> - Countably infinite
> - Properly contained in $\mathbb{C}$

> [!example] Example 3: $\overline{\mathbb{F}_p}$
> The algebraic closure of finite field $\mathbb{F}_p$:
> - Infinite field
> - Contains $\mathbb{F}_{p^n}$ for all $n$
> - $\overline{\mathbb{F}_p} = \bigcup_{n=1}^{\infty} \mathbb{F}_{p^n}$

> [!example] Example 4: $\mathbb{C}$ is algebraically closed
> By the Fundamental Theorem of Algebra:
> - Every non-constant polynomial has a complex root
> - $\overline{\mathbb{C}} = \mathbb{C}$

## Theorems

> [!abstract] Existence Theorem
> Every field $F$ has an algebraic closure $\overline{F}$.
>
> *Proof requires*: Zorn's Lemma or equivalent axiom of choice argument.

> [!abstract] Uniqueness Theorem
> If $E$ and $E'$ are both algebraic closures of $F$, then there exists an $F$-isomorphism $\phi: E \to E'$.

> [!abstract] Fundamental Theorem of Algebra
> $\mathbb{C}$ is algebraically closed.
>
> *Proof approaches*: Complex analysis (Liouville), topology (covering spaces), algebra (Galois theory).

## Construction

> [!info] Constructing $\overline{F}$
> Start with $F_0 = F$. Iteratively:
> 1. Let $F_{n+1}$ be the splitting field over $F_n$ of all polynomials in $F_n[x]$
> 2. Take $\overline{F} = \bigcup_{n=0}^{\infty} F_n$
>
> This process eventually stabilizes at an algebraically closed field.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic Extensions|Algebraic Extensions]]
- [[03 - Field Theory/Concepts/Splitting Fields|Splitting Fields]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
