---
title: Purely Inseparable Extensions
aliases:
  - Pure Inseparability
  - Inseparable Degree
topic: field-theory
tags:
  - concept
  - definition
  - field-theory
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. V, §6, printed pp. 247-251, PDF pp. 262-266"
source_status: verified
status: not-started
created: 2026-09-06
---

# Purely Inseparable Extensions

## Definition

> [!info] Purely inseparable element and extension
> Let $K$ have characteristic $p>0$. An algebraic element $\alpha$ is **purely inseparable over $K$** if $\alpha^{p^e}\in K$ for some integer $e\ge0$. An algebraic extension $E/K$ is purely inseparable when every element has this property.
>
> For a finite extension, the **inseparable degree** is
> $$
> [E:K]_i=\frac{[E:K]}{[E:K]_s},
> $$
> where $[E:K]_s$ is the number of $K$-embeddings into a fixed algebraic closure. It is a power of $p$.

## Intuition

Frobenius powers can erase distinctions between roots: $X^{p^e}-a$ has only one distinct root in an algebraic closure, with multiplicity $p^e$. A purely inseparable extension adds such uniquely determined roots. An arbitrary inseparable extension can also contain a nontrivial separable part.

## Key Properties

1. If $e$ is the least integer with $\alpha^{p^e}\in K$, then the minimal polynomial is $X^{p^e}-\alpha^{p^e}$ and $[K(\alpha):K]=p^e$.
2. Purely inseparable extensions are preserved under towers and composita in a common field.
3. An algebraic extension both separable and purely inseparable is trivial.
4. For finite $E/K$, let $S$ be the subfield of elements separable over $K$. Then $S/K$ is separable, $E/S$ is purely inseparable, and
   $$
   [S:K]=[E:K]_s,\qquad [E:S]=[E:K]_i.
   $$
5. Inseparable degrees multiply in finite towers, because total degrees and separable degrees do.

## Proof Details

For (1), a monic minimal polynomial dividing $(X-\alpha)^{p^e}$ has the form $(X-\alpha)^m$. Write $m=p^r u$ with $p\nmid u$. Its coefficient of $X^{p^r(u-1)}$ is $-u\alpha^{p^r}$, so $\alpha^{p^r}\in K$. Minimality then forces $u=1$, and minimality of $e$ forces $r=e$.

For towers, if $\alpha^{p^r}\in F$ and $F/K$ is purely inseparable, some further Frobenius power belongs to $K$. For composita, each element is a rational expression in finitely many purely inseparable generators; a common Frobenius power takes every generator into the base. The assertion follows by applying Frobenius to that rational expression.

For (3), the minimal polynomial of each element is separable but has only one distinct root, hence has degree one.

For (4), the fact that separable elements form a field is Lang's Theorems 4.4–4.5, printed pp. 241–242 / PDF pp. 256–257. Every algebraic $\alpha$ has a separable Frobenius power, as seen by writing its irreducible polynomial as $h(X^{p^r})$ with $h$ irreducible and $h'\ne0$. Thus $E/S$ is purely inseparable. Every embedding of $S$ has a unique extension to $E$, because purely inseparable roots are unique; multiplicativity of separable degrees gives the displayed degrees.

## Examples

> [!example] A simple purely inseparable extension
> For $K=\mathbb F_p(t)$ and $\alpha^p=t$, the element $t$ is not a $p$th power in $K$ (its order of vanishing at $t=0$ is one). Thus $X^p-t$ is irreducible and $[K(\alpha):K]=p$.

> [!example] Exponent and degree differ
> For algebraically independent $t,u$ over any field $k$ of characteristic $p$, the extension
> $$
> k(t,u)/k(t^p,u^p)
> $$
> has degree $p^2$, although every element has its $p$th power in the base. V.24 proves this with the basis $t^iu^j$, $0\le i,j<p$, and constructs infinitely many intermediate fields.

## Related Concepts

- [[03 - Field Theory/Concepts/Separable Extensions|Separable Extensions]]
- [[03 - Field Theory/Concepts/Minimal Polynomials|Minimal Polynomials]]
- [[03 - Field Theory/Concepts/Degree of Extension|Degree of Extension]]
- [[03 - Field Theory/Concepts/Finite Fields|Finite Fields]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Definitions and the one-root argument are source-contained in [S2, Ch. V, §6, printed pp. 249–250, PDF pp. 264–265].
- The power-of-$p$ degree statement is [S2, Prop. 6.1 and Cor. 6.2, printed pp. 247–248, PDF pp. 262–263]. The maximal separable subfield is [S2, Prop. 6.6, printed p. 250, PDF p. 265].
- The prose above expands the source arguments. The examples and exercise solutions are independently derived. Purely inseparable does not mean normal and separable, and it supplies no nontrivial automorphism group.
