---
title: Quadratic Forms
topic: linear-algebra
tags:
  - concept
  - definition
  - linear-algebra
  - quadratic-forms
created: 2026-08-12
source: "Michael Artin, Algebra, 2nd ed., Ch. 8, §§8.1–8.2 and §8.7, printed pp. 229–232 and 245–249, PDF pp. 241–244 and 257–261"
source_status: partially-verified
status: not-started
---

# Quadratic Forms

## Definition

> [!info] Quadratic form
> Let $V$ be a vector space over a field $F$ of characteristic different from $2$. A **quadratic form** is a function $q:V\to F$ of the form
>
> $$
> q(v)=B(v,v),
> $$
>
> where $B$ is a symmetric bilinear form. Relative to a basis of $V$,
>
> $$
> q(X)=X^{\mathsf T}AX
> $$
>
> for a symmetric matrix $A$.

The symmetric bilinear form is recovered by polarization:

$$
B(u,v)=\frac{q(u+v)-q(u)-q(v)}{2}.
$$

This equivalence changes in characteristic $2$, where quadratic forms contain information not captured by their polar bilinear forms.

## Change of Basis and Congruence

If $X=PY$, then

$$
q(X)=Y^{\mathsf T}(P^{\mathsf T}AP)Y.
$$

Thus quadratic forms are classified by **congruence** $A\mapsto P^{\mathsf T}AP$, not by similarity. Over $\mathbb R$, the spectral theorem diagonalizes $A$ orthogonally.

> [!abstract] Sylvester's Law of Inertia
> Every real symmetric matrix is congruent to
>
> $$
> \operatorname{diag}(I_p,-I_q,0_r),
> $$
>
> and the triple $(p,q,r)$ is invariant. The form is nondegenerate exactly when $r=0$; it is positive definite exactly when $(p,q,r)=(\dim V,0,0)$.

## Quadratic Polynomials and Quadrics

A real affine quadratic polynomial has the form

$$
f(X)=X^{\mathsf T}AX+b^{\mathsf T}X+c,
$$

with $A$ symmetric. Its zero locus is a **conic** in two variables and a **quadric** in three or more variables. Orthogonal changes of coordinates diagonalize $A$, while translations complete squares and remove the linear terms lying in $\operatorname{im}A$.

If $A$ is invertible, the center is

$$
X_0=-\frac12A^{-1}b,
$$

and the translated equation is

$$
Y^{\mathsf T}AY+c-\frac14b^{\mathsf T}A^{-1}b=0.
$$

The signature of $A$ and the translated constant distinguish ellipsoids, one- and two-sheeted hyperboloids, and cones. A nonzero component of $b$ in $\ker A$ produces a paraboloid or a parabolic cylinder.

## Examples

> [!example] Indefinite form
> The form $q(x,y,z)=x^2+y^2-z^2$ has signature $(2,1,0)$. The loci $q=1$, $q=-1$, and $q=0$ are respectively a one-sheeted hyperboloid, a two-sheeted hyperboloid, and a double cone.

> [!example] Arithmetic specialization
> A positive-definite integral form can be evaluated on $\mathbb Z^n$ and used to form a theta series. That specialization is treated in [[07 - Modular Forms/Concepts/Quadratic Forms and Theta Series|Quadratic Forms and Theta Series]].

## Key Properties

1. The rank of $q$ is the rank of any representing symmetric matrix.
2. Nondegeneracy is invariant under change of basis.
3. Over $\mathbb R$, signature is a complete invariant under linear congruence.
4. Affine classification additionally uses translations and the position of the linear term relative to $\ker A$.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Inner Product Spaces|Inner Product Spaces]]
- [[04 - Linear Algebra and Modules/Concepts/Matrix Representation|Matrix Representation]]
- [[04 - Linear Algebra and Modules/Concepts/Indefinite Bilinear Forms and Lorentz Groups|Indefinite Bilinear Forms and Lorentz Groups]]
- [[04 - Linear Algebra and Modules/Concepts/Skew-Symmetric Bilinear Forms|Skew-Symmetric Bilinear Forms]]
- [[07 - Modular Forms/Concepts/Quadratic Forms and Theta Series|Quadratic Forms and Theta Series]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```


## Source and Proof Status

- Artin defines quadratic forms in matrix language and classifies real conics and nondegenerate quadrics in [S1, Ch. 8, §8.7, printed pp. 245–249, PDF pp. 257–261].
- The coordinate-free definition, polarization identity, and characteristic-$2$ warning are standard extensions of Artin's real matrix treatment.
- The stated real classification follows from the spectral theorem, completion of squares, and Sylvester's Law of Inertia; these inputs are proved or developed in Artin Chapter 8.
