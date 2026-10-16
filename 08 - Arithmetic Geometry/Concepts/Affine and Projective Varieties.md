---
title: Affine and Projective Varieties
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - algebraic-geometry
created: 2026-01-19
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, Proposition 11.9.9 and Theorem 11.9.10, printed pp. 349-350, PDF pp. 361-362; Serge Lang, Algebra, rev. 3rd ed., Ch. IX, §2, printed pp. 383-386, PDF pp. 398-401"
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

### Finite Intersections in the Affine Plane

> [!abstract] Artin's finite-intersection theorem: 11.9.10
> If nonzero $f,g\in\mathbb C[t,x]$ have no common nonconstant factor, then $V(f,g)\subseteq\mathbb C^2$ is finite [S1, printed pp. 349-350, PDF pp. 361-362].
>
> **Proof route in the source, expanded here:** Put $F=\mathbb C(t)$. If the monic greatest common divisor of $f,g$ in $F[x]$ had positive degree in $x$, clear denominators and remove all factors depending only on $t$ to obtain $h\in\mathbb C[t,x]$ not divisible by any $t-a$. Proposition 11.9.9 then descends both divisibilities from $F[x]$ to $\mathbb C[t,x]$, producing a common nonconstant factor, a contradiction.
>
> Hence $f,g$ generate the unit ideal of $F[x]$. Write $1=rf+sg$ there and clear denominators:
> $$
> 0\ne a(t)=r_1(t,x)f(t,x)+s_1(t,x)g(t,x).
> $$
> Every common zero has $a(t)=0$, so only finitely many $t$-coordinates occur. Interchanging $t,x$ gives a nonzero polynomial $b(x)$ vanishing on all common zeros. The intersection lies in the finite product of the roots of $a$ and $b$.
>
> **Descent input:** Proposition 11.9.9 requires that $h$ have no factor $t-a$. To see why this condition suffices, write $u(t)f=hq$ with $q\in\mathbb C[t,x]$ and denominators cleared. If $t-a$ divides $u$, evaluation at $t=a$ gives $h(a,x)q(a,x)=0$. Since $h(a,x)\ne0$, one has $q(a,x)=0$, so $t-a$ divides $q$ and can be cancelled. Repeat until the denominator disappears.

The hypothesis is necessary: $f=tx$ and $g=t(x-1)$ share $t$ and have the entire line $t=0$ in common. If $f$ is irreducible and $f\nmid g$, their common zeros are finite. This is the input used for singular points and parametrized curve kernels in Exercises R95 and R99.

> [!warning] Finite intersection is not the full Bézout theorem
> After Theorem 11.9.10, Artin states the affine bound $\#V(f,g)\le mn$ for total degrees $m,n$ under the same no-common-factor hypothesis, but explicitly does not prove that bound [S1, printed pp. 349-350, PDF pp. 361-362]. The projective multiplicity theorem below is a stronger external input, not a result established by Artin's finite-intersection proof or by the checked Lang IX §2 coordinate definitions.

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
- [[02 - Ring Theory/Concepts/Irreducible Polynomials|Irreducible Polynomials]]
- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]
- [[08 - Arithmetic Geometry/Concepts/Riemann Surfaces|Riemann Surfaces]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

Lang defines affine space, homogeneous polynomials and ideals, projective space as nonzero tuples modulo common scalar, and projective algebraic spaces on the cited pages. This supports the core coordinate definitions. The standard affine cover, projective closure, properness, Bézout theorem, and morphism definition are not established in the checked slice and remain external inputs. The coordinate convention has been made explicit so that the point at infinity is consistent throughout the examples.

The finite-intersection statement and divisibility descent were separately checked against Artin's printed pp. 349-350 / PDF pp. 361-362. The expanded proof follows the source argument; the common-line example is independently computed. No proof of the Bézout bound or projective multiplicity theorem is claimed here.
