---
title: Binary Operations and Associativity
aliases:
  - Laws of Composition
  - Binary Operations
topic: group-theory
tags:
  - concept
  - definition
  - group-theory
  - foundations
created: 2026-08-10
source: "Michael Artin, Algebra, 2nd ed., Ch. 2, Sections 1-2"
---

# Binary Operations and Associativity

## Definition

> [!info] Definition (Binary Operation)
> A **binary operation**, or **law of composition**, on a set $S$ is a function
> $$\mu:S\times S\longrightarrow S.$$
> We usually write
> $$\mu(a,b)=ab,qquad a,b\in S.$$
> The codomain condition expresses **closure**: combining two elements of $S$ must produce another element of $S$.

The notation $ab$ does not imply ordinary multiplication. It may denote addition, matrix multiplication, composition of functions, or any other specified law.

## Associativity

> [!info] Definition (Associative Law)
> A binary operation on $S$ is **associative** if
> $$(ab)c=a(bc)$$
> for every $a,b,c\in S$.

Associativity permits an unambiguous product $a_1a_2\cdots a_n$ without specifying parentheses. It does not permit the factors to be reordered; that requires commutativity.

> [!example] Example: Function Composition
> For functions $f,g,h:X\to X$,
> $$((f\circ g)\circ h)(x)=f(g(h(x)))=(f\circ(g\circ h))(x).$$
> Hence function composition is associative.

> [!warning] Non-Example: Subtraction
> Subtraction on $\mathbb Z$ is not associative because
> $$(3-2)-1=0\ne2=3-(2-1).$$

## Identities

> [!info] Definition (One-Sided and Two-Sided Identities)
> An element $e_L\in S$ is a **left identity** if $e_La=a$ for every $a\in S$.
> An element $e_R\in S$ is a **right identity** if $ae_R=a$ for every $a\in S$.
> A **two-sided identity** is both a left and a right identity.

> [!abstract] Proposition (Compatibility of One-Sided Identities)
> If a binary operation has a left identity $e_L$ and a right identity $e_R$, then $e_L=e_R$. Consequently, a two-sided identity is unique.
>
> **Proof.** Since $e_L$ is a left identity and $e_R$ is a right identity,
> $$e_L=e_Le_R=e_R.$$
> If $e$ and $e'$ are both two-sided identities, apply the same calculation to obtain $e=e'$. $\square$

## One-Sided Inverses

Assume that the operation is associative and has identity $e$.

> [!info] Definition (One-Sided Inverses)
> A **left inverse** of $a$ is an element $b$ such that $ba=e$.
> A **right inverse** of $a$ is an element $c$ such that $ac=e$.

> [!abstract] Proposition (A Left and Right Inverse Agree)
> If $b$ is a left inverse of $a$ and $c$ is a right inverse of $a$, then $b=c$.
>
> **Proof.** Associativity gives
> $$b=be=b(ac)=(ba)c=ec=c.\qquad\square$$

Thus, once an element has both a left and a right inverse, it makes sense to speak of **the** inverse $a^{-1}$.

The qualifier “one-sided” matters. For the shift map $s:\mathbb N\to\mathbb N$, $s(n)=n+1$, composition admits many left inverses but no right inverse; see [[01 - Group Theory/Exercises/Exercise G9 - Shift Map and One-Sided Inverses|Exercise G9]].

## Examples

> [!example] Example 1: The Left-Zero Law
> On any set $S$, define $ab=a$. Then
> $$(ab)c=a=a(bc),$$
> so the law is associative. It has an identity exactly when $S$ is a singleton.

> [!example] Example 2: Endomorphisms of a Set
> The set of all functions $X\to X$ is closed under composition. Composition is associative, and $\operatorname{id}_X$ is its identity. Not every function is invertible.

> [!example] Example 3: Matrix Multiplication
> The set $M_n(F)$ of $n\times n$ matrices over a field $F$ is closed under associative matrix multiplication and has identity $I_n$. Singular matrices do not have multiplicative inverses.

## Reversing a Law

Given an associative operation on $S$, define a new operation by
$$a*b=ba.$$
Then
$$(a*b)*c=c(ba)=(cb)a=a*(b*c),$$
so the reversed operation is also associative. Applied to a group, this construction gives the [[01 - Group Theory/Concepts/Opposite Groups|opposite group]].

## Key Properties

1. Associativity changes parentheses but never changes the order of the factors.
2. If a left identity and a right identity both exist, they coincide; a two-sided identity is therefore unique.
3. In an associative law with identity, a left inverse and a right inverse of the same element must coincide.
4. Reversing an associative law produces another associative law.

## Related Concepts

- [[01 - Group Theory/Concepts/Semigroups Monoids and Units|Semigroups, Monoids, and Units]]
- [[01 - Group Theory/Concepts/Group Definition|Group Definition]]
- [[01 - Group Theory/Concepts/Opposite Groups|Opposite Groups]]

## Exercises

- [[01 - Group Theory/Exercises/Exercise G7 - Left-Zero Law|Exercise G7: Left-Zero Law]]
- [[01 - Group Theory/Exercises/Exercise G9 - Shift Map and One-Sided Inverses|Exercise G9: Shift Map and One-Sided Inverses]]
- [[01 - Group Theory/Exercises/Exercise G15 - Opposite Group|Exercise G15: Opposite Group]]

## Source and Proof Status

The definitions and motivating exercises follow [S1, Ch. 2, Sections 1-2]. Every proposition stated above is proved in this note directly from the definitions; no external theorem or computation is imported.
