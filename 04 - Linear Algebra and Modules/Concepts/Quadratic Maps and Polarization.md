---
title: Quadratic Maps and Polarization
aliases:
  - Homogeneous Quadratic Maps
  - Polarization of Module Maps
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - quadratic-maps
created: 2026-09-29
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XV, §2, printed pp. 574-575, PDF pp. 589-590"
source_status: partially-verified
status: not-started
---

# Quadratic Maps and Polarization

## Definition

> [!info] Lang's quadratic maps of modules
> Let $R$ be a commutative ring and let $E,F$ be $R$-modules. In Lang's convention, a map $f:E\to F$ is **$R$-quadratic** if there are a symmetric $R$-bilinear map $B:E\times E\to F$ and an $R$-linear map $L:E\to F$ such that
>
> $$
> f(x)=B(x,x)+L(x).
> $$
>
> It is **homogeneous quadratic** when it has such an expression with $L=0$. These maps satisfy $f(0)=0$; this convention does not include a constant term.

If multiplication by $2$ is injective on $F$, the maps $B,L$ are uniquely determined, so the phrase “its associated linear map is zero” is unambiguous. If multiplication by $2$ is bijective on $F$, write $z/2$ for the unique element whose double is $z$. This inverse map is $R$-linear because multiplication by $2$ is an $R$-module automorphism.

## Intuition

The diagonal $B(x,x)$ hides a two-variable interaction. The **cross-effect** measures the failure of additivity and recovers that interaction:

$$
\Delta f(x,y)=f(x+y)-f(x)-f(y).
$$

For Lang's quadratic maps, expanding $B(x+y,x+y)$ gives $\Delta f(x,y)=2B(x,y)$. Thus polarization removes the linear term and separates the quadratic part from it.

## Key Properties

1. If $F$ has no $2$-torsion and $f=B(x,x)+L(x)$, then $\Delta f=2B$ determines $B$, and $L(x)=f(x)-B(x,x)$ determines $L$. This is Lang XV, Proposition 2.1.
2. If $2$ is invertible on $F$ and $\Delta f$ is $R$-bilinear, then $B=\frac12\Delta f$ is symmetric $R$-bilinear. The remainder $L(x)=f(x)-B(x,x)$ is additive: its cross-effect is zero. It need not be $R$-linear without an additional scalar-compatibility hypothesis. If also $f(2x)=4f(x)$, then $L(2x)=2L(x)=4L(x)$, so $L=0$ and $f$ is homogeneous $R$-quadratic. This is the distinction made in Proposition 2.2, where the remainder is called $\mathbb Z$-linear.
3. Every homogeneous $R$-quadratic map satisfies the parallelogram law

$$
f(x+y)+f(x-y)=2f(x)+2f(y).
$$

4. When $2$ is invertible on $F$, the parallelogram law conversely gives a unique symmetric **biadditive** map

$$
B(x,y)=\frac{f(x+y)-f(x-y)}4
=\frac{f(x+y)-f(x)-f(y)}2,
\qquad f(x)=B(x,x).
$$

It does not by itself give $R$-bilinearity. The precise proof and the source's missing scalar condition are in the linked exercise on the parallelogram law.

## Examples

> [!example] A module-valued quadratic polynomial
> On $E=R^2$, the map $f(x_1,x_2)=x_1^2+x_2$ is quadratic with $B((x_1,x_2),(y_1,y_2))=x_1y_1$ and $L(x_1,x_2)=x_2$. It is generally not homogeneous quadratic.

> [!example] A change of coefficient ring matters
> The map $f:\mathbb C\to\mathbb C$, $f(z)=|z|^2$, satisfies the parallelogram law. Its polarization is $B(z,w)=\operatorname{Re}(z\overline w)$, which is real bilinear and hence biadditive. It is not complex bilinear: $f(i)=1$ whereas complex homogeneity would give $f(i)=i^2f(1)=-1$.

> [!example] Why torsion matters
> On $E=F=\mathbb F_2$, the function $f(x)=x$ is both the diagonal of $B(x,y)=xy$ and the linear map $L(x)=x$. Thus the associated quadratic and linear parts are not unique without the torsion hypothesis.

## Higher Polarization

One extension of Lang's definition is a normalized polynomial map

$$
f(x)=\sum_{j=1}^{d}B_j(x,\ldots,x),
$$

where each $B_j:E^j\to F$ is symmetric and $R$-multilinear. Its top cross-effect is

$$
D_df(x_1,\ldots,x_d)
=\sum_{I\subseteq\{1,\ldots,d\}}(-1)^{d-|I|}
f\left(\sum_{i\in I}x_i\right)
=d!B_d(x_1,\ldots,x_d).
$$

Cancellation removes all terms missing one of the $d$ variables; the surviving terms are the $d!$ permutations of the top multilinear term. If multiplication by $d!$ on $F$ is injective, this determines $B_d$ uniquely; descending induction determines every $B_j$. If it is bijective, division by the factorial gives explicit recovery formulas. These are statements about the displayed class of maps, not a claim that arbitrary functions or arbitrary difference-polynomial maps admit such an $R$-multilinear representation.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Definition|Module Definition]]
- [[04 - Linear Algebra and Modules/Concepts/Module Homomorphisms|Module Homomorphisms]]
- [[04 - Linear Algebra and Modules/Concepts/Bilinear and Hermitian Forms|Bilinear and Hermitian Forms]]
- [[04 - Linear Algebra and Modules/Concepts/Quadratic Forms|Quadratic Forms]]
- [[01 - Group Theory/Concepts/Abelian Groups|Abelian Groups]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- Lang's definition and the uniqueness of the bilinear and linear parts were checked against [S2, Ch. XV, §2, Proposition 2.1, printed p. 574, PDF p. 589]. The homogeneous convention and Proposition 2.2, including its explicit $\mathbb Z$-linearity conclusion, were checked at printed p. 575 / PDF p. 590.
- The parallelogram-law converse is posed in XV.12, not proved there. Its distinction between additive and $R$-linear structure is independently audited in the corresponding exercise note.
- The examples and higher-degree formulas above are independent expansions. The higher-degree definition answers the open-ended instruction in XV.15 under explicit factorial-torsion hypotheses; it is not asserted to be the only possible definition of polynomial maps over rings.
