---
title: Affine and Projective Varieties
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
created: 2026-01-19
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, §2, printed pp. 383–386, PDF pp. 398–401"
source_status: partially-verified
status: not-started
---

# Affine and Projective Varieties

## Affine Space

> [!info] Definition (Affine Space)
> **Affine $n$-space** over field $K$ is:
> $$
> \mathbb{A}^n_K = \{(a_1, \ldots, a_n) : a_i \in K\}
> $$
> with the Zariski topology (closed sets are algebraic sets).

## Projective Space

> [!info] Definition (Projective Space)
> **Projective $n$-space** over $K$ is:
> $$
> \mathbb{P}^n_K = (K^{n+1} \setminus \{0\}) / \sim
> $$
> where $(a_0, \ldots, a_n) \sim (\lambda a_0, \ldots, \lambda a_n)$ for $\lambda \in K^*$.
>
> Points are written as $[a_0 : a_1 : \cdots : a_n]$.

## Homogeneous Coordinates

In $\mathbb{P}^n$:
- Points are equivalence classes $[a_0 : \cdots : a_n]$
- Only **homogeneous** polynomials make sense (same degree in all terms)
- A polynomial $F$ is homogeneous of degree $d$ if $F(\lambda x_0, \ldots, \lambda x_n) = \lambda^d F(x_0, \ldots, x_n)$

## Affine Patches

> [!info] Definition (Standard Affine Cover)
> $\mathbb{P}^n$ is covered by $n+1$ affine patches:
> $$
> U_i = \{[a_0 : \cdots : a_n] : a_i \neq 0\} \cong \mathbb{A}^n
> $$
> via $[a_0 : \cdots : a_n] \mapsto (a_0/a_i, \ldots, \widehat{a_i/a_i}, \ldots, a_n/a_i)$.

## Projective Closure

> [!info] Definition (Homogenization)
> For affine variety $V(f) \subset \mathbb{A}^n$, the **projective closure** is $V(F) \subset \mathbb{P}^n$ where $F$ is the homogenization of $f$:
> $$
> F(x_0, \ldots, x_n) = x_0^d f(x_1/x_0, \ldots, x_n/x_0)
> $$

> [!tip] Points at Infinity
> The projective closure adds "points at infinity" where $x_0 = 0$.

## Examples

> [!example] Example 1: Projective line
> With the convention that the affine coordinate is $a_1/a_0$ on $a_0\neq0$, one has $\mathbb{P}^1=\mathbb{A}^1\cup\{\infty\}$ with $\infty=[0:1]$.

> [!example] Example 2: Elliptic curve
> Affine: $y^2 = x^3 + ax + b$
> Projective: $Y^2 Z = X^3 + aXZ^2 + bZ^3$
> Point at infinity: $[0:1:0]$ (the identity element!)

> [!example] Example 3: Parabola
> Affine: $y = x^2$ in $\mathbb{A}^2$
> Projective closure in $\mathbb{P}^2$: $YZ = X^2$
> Point at infinity: $[0:1:0]$.

> [!example] Example 4: Two lines
> $xy = 0$ in $\mathbb{A}^2$ gives $XY = 0$ in $\mathbb{P}^2$.
> Points at infinity: $[1:0:0]$ and $[0:1:0]$.

## Why Projective?

| Property | Affine | Projective |
|----------|--------|------------|
| Properness | Usually not proper | Proper over $K$ |
| Bézout's theorem | Fails | Works |
| Intersection theory | Complicated | Clean |
| Points at infinity | None | Included |

> [!abstract] Bézout's Theorem
> Two projective curves of degrees $m$ and $n$ (with no common component) intersect in exactly $mn$ points (counted with multiplicity, over $\bar{K}$).

Over $K=\mathbb C$, projective varieties are compact in the analytic topology. Over a general field, **properness** is the field-independent algebraic notion; “compactness” without specifying a topology is not.

## Morphisms

> [!info] Definition (Morphism of Varieties)
> A **morphism** $\phi: V \to W$ is a map given locally by rational functions that are regular (defined) everywhere on $V$.

## Related Concepts

- [[08 - Arithmetic Geometry/Concepts/Zariski Topology|Zariski Topology]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Schemes|Schemes]]
- [[08 - Arithmetic Geometry/Concepts/Elliptic Curves Arithmetic|Elliptic Curves]]
- [[08 - Arithmetic Geometry/Concepts/Curves over Number Fields|Curves over Number Fields]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Lang defines affine space, homogeneous polynomials and ideals, projective space as nonzero tuples modulo common scalar, and projective algebraic spaces on the cited pages. This supports the core coordinate definitions. The standard affine cover, projective closure, properness, Bézout theorem, and morphism definition are not established in the checked slice and remain external inputs. The coordinate convention has been made explicit so that the point at infinity is consistent throughout the examples.
