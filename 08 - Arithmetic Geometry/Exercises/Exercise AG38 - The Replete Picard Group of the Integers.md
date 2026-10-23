---
title: 'Exercise AG38: The Replete Picard Group of the Integers'
topic: arithmetic-geometry
difficulty: advanced
status: not-started
tags:
- exercise
- arithmetic-geometry
source: Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 3, printed p. 193, PDF p. 212
source_refs:
- S4/ch-III/sec-1/ex-3
created: '2026-10-23'
---

# Exercise AG38: The Replete Picard Group of the Integers

## Problem Statement

> [!question] Neukirch III.1.3
> Show that the absolute norm $\mathfrak N:\operatorname{Pic}(\overline{\mathbb Z})\longrightarrow\mathbb R_+^*$ is an isomorphism.

## Hints

> [!hint]- Hint 1
> Write a replete ideal as $(q)\times r$ with $q,r>0$; $\mathbb Q$ has just one infinite place.

> [!hint]- Hint 2
> Its norm is $qr$. The finite part of the replete principal ideal $[q]$ is $(q)$ and its infinite part is $q^{-1}$, so its norm is $1$.

## Solution

> [!success]- Independent derivation
> Here $\overline{\mathbb Z}$ is the chapter's replete notation, including the infinite place, not the integral closure of $\mathbb Z$. Every nonzero fractional ideal of $\mathbb Z$ is uniquely $(q)=q\mathbb Z$ with $q\in\mathbb Q_{>0}$. Hence
> $$
> J(\overline{\mathbb Z})=\{((q),r):q\in\mathbb Q_{>0},\ r\in\mathbb R_{>0}\},\qquad \mathfrak N((q),r)=qr.
> $$
> At the infinite place, $v_\infty(a)=-\log|a|$, so $[a]=((|a|),|a|^{-1})$. Thus $\mathfrak N([a])=1$, and the norm induces a well-defined homomorphism on the quotient group.
>
> **Surjectivity:** For every $t>0$, the replete ideal $((1),t)$ has norm $t$.
>
> **Injectivity:** If $\mathfrak N((q),r)=1$, then $r=q^{-1}$, so $((q),r)=[q]$ represents the zero class in the Picard group. More directly, multiplying any $((q),r)$ by $[q^{-1}]$ reduces it to $((1),qr)$, so every class has exactly one representative with trivial finite part.
>
> The inverse homomorphism is $t\mapsto[((1),t)]$. With the topology used in the book, this is also a topological isomorphism: the inverse is the continuous inclusion $\mathbb R_{>0}\hookrightarrow J(\overline{\mathbb Z})$ followed by the quotient map, and the norm itself is continuous.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Replete Ideals and Arakelov Divisors|Replete Ideals and Arakelov Divisors]]

- [[02 - Ring Theory/Concepts/Dedekind Rings and Fractional Ideals|Fractional Ideals]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]

## Notes

- **Source and proof status:** [Jürgen Neukirch, Algebraic Number Theory, English ed., 1999, Ch. III, §1, Exercise 3, printed p. 193, PDF p. 212]. An independent calculation using this section's definitions of replete ideals, principal ideals, and their norms in (1.4)–(1.5), printed pp. 185–186 / PDF pp. 204–205. The exercise itself is not used as an input.
- **Notation:** The ordinary group $\operatorname{Pic}(\mathbb Z)$ is trivial. The infinite place is what produces $\mathbb R_{>0}$ here.
