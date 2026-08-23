---
title: Semigroups, Monoids, and Units
aliases:
  - Semigroups and Monoids
  - Units of a Monoid
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - monoids
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, §§2.1–2.2, printed pp. 37–43, PDF pp. 49–55"
source_status: partially-verified
status: not-started
---

# Semigroups, Monoids, and Units

## Definition

### Algebraic Hierarchy

> [!info] Definition (Magma)
> A **magma** is a set equipped with a binary operation.

> [!info] Definition (Semigroup)
> A **semigroup** is a magma whose operation is associative.

> [!info] Definition (Monoid)
> A **monoid** is a semigroup with an identity element.

> [!info] Definition (Group)
> A **group** is a monoid in which every element is invertible.

These structures form the hierarchy
$$
\text{group}\Longrightarrow\text{monoid}\Longrightarrow\text{semigroup}\Longrightarrow\text{magma}.
$$
None of the reverse implications holds in general.

## Units

Let $S$ be a monoid with identity $e$.

> [!info] Definition (Unit)
> An element $a\in S$ is a **unit**, or **invertible element**, if there exists $b\in S$ such that
> $$ab=ba=e.$$
> The element $b$ is uniquely determined and is denoted by $a^{-1}$.
> The set of all units of $S$ is denoted by $S^{\times}$.

Indeed, if $b$ and $c$ are both inverses of $a$, then associativity gives
$$b=b(ac)=(ba)c=c.$$

> [!abstract] Proposition (The Units Form a Group)
> For every monoid $S$, the set $S^{\times}$ is a group under the operation inherited from $S$.
>
> **Proof.** Let $a,b\in S^{\times}$. Then
> $$(ab)(b^{-1}a^{-1})=a(bb^{-1})a^{-1}=e$$
> and
> $$(b^{-1}a^{-1})(ab)=b^{-1}(a^{-1}a)b=e.$$
> Thus $ab$ is a unit and
> $$(ab)^{-1}=b^{-1}a^{-1},$$
> proving closure. Associativity is inherited from $S$. The identity $e$ is a unit with $e^{-1}=e$. Finally, if $a$ is a unit, then $a^{-1}$ is a unit whose inverse is $a$. Hence all group axioms hold on $S^{\times}$. $\square$

The group $S^{\times}$ is called the **group of units** of $S$.

## Key Properties

1. Every group is a monoid, every monoid is a semigroup, and every semigroup is a magma.
2. The identity of $S^{\times}$ is the identity of the ambient monoid $S$.
3. If $a,b\in S^{\times}$, then $ab\in S^{\times}$ and $(ab)^{-1}=b^{-1}a^{-1}$.
4. If $a\in S^{\times}$, then $a^{-1}\in S^{\times}$.
5. In an infinite monoid, having only a left inverse or only a right inverse need not make an element a unit.

## Examples

> [!example] Example 1: Natural Numbers under Addition
> Let $\mathbb N=\{0,1,2,\ldots\}$. Then $(\mathbb N,+)$ is a commutative monoid with identity $0$. Its only unit is $0$, because $m+n=0$ with $m,n\in\mathbb N$ forces $m=n=0$.

> [!example] Example 2: Integers under Multiplication
> The monoid $(\mathbb Z,\cdot)$ has identity $1$, and
> $$\mathbb Z^{\times}=\{1,-1\}.$$
> Indeed, an integer $a$ has an integer multiplicative inverse precisely when $a=\pm1$.

> [!example] Example 3: Matrices
> The matrix monoid $M_n(F)$ has identity $I_n$. Its group of units is
> $$M_n(F)^{\times}=GL_n(F),$$
> the group of invertible matrices.

> [!example] Example 4: Transformations of a Set
> The set $\operatorname{End}(X)$ of all functions $X\to X$ is a monoid under composition. Its units are exactly the bijections $X\to X$, which form the symmetric group $\operatorname{Sym}(X)$.

## One-Sided Invertibility

In an infinite transformation monoid, a left inverse need not also be a right inverse. The shift map in [[01 - Group Theory/Exercises/Exercise G9 - Shift Map and One-Sided Inverses|Exercise G9]] is the basic example. Therefore the definition of a unit requires both equations
$$ab=e\qquad\text{and}\qquad ba=e.$$

## Related Concepts

- [[01 - Group Theory/Concepts/Binary Operations and Associativity|Binary Operations and Associativity]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Symmetric Groups|Symmetric Groups]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```


## Source and Proof Status

The hierarchy and unit construction follow the foundational route of [S1, Ch. 2, Sections 1-2]. The proposition that $S^{\times}$ is a group is proved completely above; the examples are verified directly from their definitions.
