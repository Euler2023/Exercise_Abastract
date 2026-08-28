---
title: Quadratic Number Fields and Rings of Integers
aliases:
  - Quadratic Fields
  - Rings of Integers in Quadratic Fields
  - Algebraic Integers in Quadratic Fields
topic: field-theory
tags:
  - concept
  - field-theory
  - algebraic-integers
  - quadratic-fields
created: 2026-08-28
source: "Michael Artin, Algebra, 2nd ed., Ch. 13, §§13.1–13.2, printed pp. 383–386, PDF pp. 395–398"
source_status: partially-verified
status: not-started
---

# Quadratic Number Fields and Rings of Integers

## Definition

> [!info] Quadratic number field
> Let $d$ be a square-free integer other than $1$. The field
>
> $$
> K=\mathbb Q(\sqrt d)
> =\{a+b\sqrt d:a,b\in\mathbb Q\}
> $$
>
> is a **quadratic number field**. It is real when $d>0$ and imaginary when $d<0$.

> [!info] Algebraic integer and ring of integers
> An algebraic number is an **algebraic integer** if it is a root of a monic polynomial in $\mathbb Z[x]$. The algebraic integers contained in $K$ form its **ring of integers**, denoted $\mathcal O_K$.

## Conjugation, Trace, and Norm

The nontrivial $\mathbb Q$-automorphism of $K$ sends

$$
\alpha=a+b\sqrt d
\quad\longmapsto\quad
\overline\alpha=a-b\sqrt d.
$$

The trace and norm are

$$
\operatorname{Tr}_{K/\mathbb Q}(\alpha)=\alpha+\overline\alpha=2a,
\qquad
N_{K/\mathbb Q}(\alpha)=\alpha\overline\alpha=a^2-b^2d.
$$

They are rational, and the norm is multiplicative. The monic quadratic polynomial of a nonrational element is

$$
x^2-\operatorname{Tr}(\alpha)x+N(\alpha).
$$

Consequently, $a+b\sqrt d$ is integral exactly when both $2a$ and $a^2-b^2d$ are integers.

## Explicit Ring of Integers

> [!abstract] Quadratic integral-basis theorem
> For square-free $d$,
>
> $$
> \mathcal O_K=
> \begin{cases}
> \mathbb Z[\sqrt d],&d\equiv2,3\pmod4,\\
> \mathbb Z\!\left[\dfrac{1+\sqrt d}{2}\right],&d\equiv1\pmod4.
> \end{cases}
> $$

In the second case, set

$$
\eta=\frac{1+\sqrt d}{2},
\qquad
h=\frac{1-d}{4}\in\mathbb Z.
$$

Then $\eta^2-\eta+h=0$, so products of integer combinations of $1$ and $\eta$ remain integer combinations of $1$ and $\eta$.

## Examples and Boundaries

> [!example] The golden ratio
> The number $(1+\sqrt5)/2$ is integral because it satisfies $x^2-x-1=0$. Thus
>
> $$
> \mathcal O_{\mathbb Q(\sqrt5)}
> =\mathbb Z\!\left[\frac{1+\sqrt5}{2}\right].
> $$

> [!example] The field $\mathbb Q(\sqrt{-5})$
> Since $-5\equiv3\pmod4$,
>
> $$
> \mathcal O_{\mathbb Q(\sqrt{-5})}=\mathbb Z[\sqrt{-5}].
> $$

- Replacing $d$ by its square-free part does not change the field.
- Different radicands can define the same field: for nonsquares $d,d'$, equality holds exactly when $d/d'$ is a rational square.
- Integrality is stronger than algebraicity; for example, $1/2$ is algebraic over $\mathbb Q$ but is not an algebraic integer.

## Related Concepts

- [[03 - Field Theory/Concepts/Algebraic and Transcendental Elements|Algebraic and Transcendental Elements]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Field Extensions|Field Extensions]]
- [[02 - Ring Theory/Concepts/Integral Domains|Integral Domains]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

The definitions, trace–norm criterion, and integral-basis classification were checked against [S1, Ch. 13, §§13.1–13.2, printed pp. 383–386, PDF pp. 395–398]. The examples and boundary explanations are direct consequences recorded independently.
