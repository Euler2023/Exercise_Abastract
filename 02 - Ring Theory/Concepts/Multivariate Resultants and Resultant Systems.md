---
title: Multivariate Resultants and Resultant Systems
aliases:
  - Multivariate Resultants
  - Macaulay Resultant
  - Resultant Systems
  - Multipolynomial Resultant
topic: ring-theory
tags:
  - concept
  - definition
  - ring-theory
  - elimination-theory
  - algebraic-geometry
created: 2026-09-15
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. IX, §§3–4, printed pp. 388–405, PDF pp. 403–420"
source_status: partially-verified
status: not-started
---

# Multivariate Resultants and Resultant Systems

## Definition

Fix positive degrees $d_1,\ldots,d_n$. Let $F_i=\sum_{|\alpha|=d_i}W_{i,\alpha}X^\alpha$ be the generic forms in $n$ variables, with independent coefficient variables $W$. A tuple of forms $f_i$ over a field $k$ is obtained by specializing $W$ to its coefficients $c$; the prescribed degrees are retained if some coefficients become zero.

> [!info] The Macaulay Resultant
> The normalized universal resultant $R\in\mathbf Z[W]$ has the following properties:
> 1. $R(c)=0$ if and only if the specialized forms have a common nontrivial zero over an algebraic closure of $k$, equivalently a common point of $\mathbb P^{n-1}$.
> 2. It is homogeneous in each coefficient block $W_i$, of degree
> $$
> D_i=\prod_{j\ne i}d_j.
> $$
> 3. It is irreducible over $\mathbf Z$, and its sign is fixed by
> $$
> R(X_1^{d_1},\ldots,X_n^{d_n})=1.
> $$
> The number $R(c)$ is denoted $\operatorname{Res}(f_1,\ldots,f_n)$.

> [!info] Resultant Systems
> For $r$ forms of fixed positive degrees in $n$ variables, a single equation need not describe the locus of systems with a common projective zero. A **resultant system** is a finite family $R_1(W),\ldots,R_s(W)$ with integer coefficients such that, under every specialization $W\mapsto c$ to a field,
> $$
> R_1(c)=\cdots=R_s(c)=0
> \iff f_1,\ldots,f_r\text{ have a common nontrivial zero over }\bar k.
> $$
> One may also specialize some coefficient blocks first and regard the remaining polynomials as a resultant system in the remaining parameters.

This definition specifies a zero set, not its scheme structure. In particular $\{R_1^2,\ldots,R_s^2\}$ is another resultant system with exactly the same defining property. Multiplicities of factors of its gcd can therefore depend on the chosen system.

## Intuition and Elimination Theory

Let $N$ be the total number of coefficients. The incidence variety in projective variable space and **affine** coefficient space is
$$
V=\{(x,c)\in\mathbb P^{n-1}\times\mathbb A^N:F_i(c,x)=0\text{ for every }i\}.
$$
Its image in $\mathbb A^N$ consists precisely of systems with a common projective zero. Projective elimination makes this image closed. For the universal forms the incidence prime can be written as a saturation
$$
\mathfrak p=(F_1,\ldots,F_r):X_q^\infty
$$
for any variable $X_q$, and its intersection with the coefficient ring is the prime elimination ideal. The ordinary intersection $(F_1,\ldots,F_r)\cap\mathbf Z[W]$ is zero, so this saturation matters.

For $r=n$, the prime elimination ideal is principal and its zero set is an irreducible hypersurface, defined by the resultant. Its normalized generator remains irreducible over every field and every algebraic closure; the field reduction argument is proved in the exercise linked through the list below.

## Binary Forms and the Sylvester Resultant

For nonzero binary forms over an algebraically closed field, absorb the overall scalars into factorizations
$$
f(X,Y)=\prod_{i=1}^d(\alpha_iX-\beta_iY),\qquad
g(X,Y)=\prod_{j=1}^e(\gamma_jX-\delta_jY).
$$
The Macaulay resultant equals the Sylvester determinant with the $e$ shifted coefficient rows of $f$ preceding the $d$ shifted rows of $g$. In this sign convention,
$$
\operatorname{Res}(f,g)=\prod_{i,j}(\beta_i\gamma_j-\alpha_i\delta_j).
$$
Each factor is the determinant of the actual coefficient rows $(\alpha_i,-\beta_i)$ and $(\gamma_j,-\delta_j)$. When $f=a\prod_i(X-r_iY)$ and $g=b\prod_j(X-s_jY)$ this is equivalently
$$
\operatorname{Res}(f,g)=a^e b^d\prod_{i,j}(r_i-s_j).
$$

The resulting polynomial identities, valid over arbitrary commutative rings with fixed prescribed degrees, are:

- **Multiplicativity:** $\operatorname{Res}(fg,h)=\operatorname{Res}(f,h)\operatorname{Res}(g,h)$.
- **Interchange:** $\operatorname{Res}(f,g)=(-1)^{de}\operatorname{Res}(g,f)$.

## Examples

> [!example] Linear forms and the sign
> For $f=aX+bY$ and $g=cX+dY$,
> $$
> \operatorname{Res}(f,g)=\det\begin{pmatrix}a&b\\c&d\end{pmatrix}=ad-bc.
> $$
> Thus $\operatorname{Res}(X,Y)=1$, whereas $\operatorname{Res}(Y,X)=-1$.

> [!example] A root meeting a quadratic
> For $f=X^2-Y^2=(X-Y)(X+Y)$ and $g=X-tY$,
> $$
> \operatorname{Res}(f,g)=(1-t)(-1-t)=t^2-1.
> $$
> Its zeros are exactly the parameter values for which the two forms have a common projective zero. The identity remains valid in characteristic $2$, where the two roots merge.

> [!example] Three binary linear forms need a system
> Write $f_i=a_iX+b_iY$ for $i=1,2,3$. They have a common nonzero vector precisely when their $3\times2$ coefficient matrix has rank at most $1$. A resultant system is therefore
> $$
> a_1b_2-a_2b_1,\qquad
> a_1b_3-a_3b_1,\qquad
> a_2b_3-a_3b_2.
> $$
> Squaring all three polynomials preserves the common-zero criterion but changes the defining ideal, illustrating why a resultant system does not determine multiplicities.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Polynomial Resultants|Polynomial Resultants]]
- [[02 - Ring Theory/Concepts/Polynomial Rings|Polynomial Rings]]
- [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz|Hilbert Nullstellensatz]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]

## Exercises

```dataview
TABLE status, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
```

## Source and Proof Status

- **Source results:** Lang proves the saturation description and principality in [S2, Ch. IX, Theorems 3.4–3.5, printed pp. 390–392, PDF pp. 405–407], and the block degrees and normalization in [Theorem 3.8 and following normalization, printed pp. 396–397, PDF pp. 411–412]. Projective closedness is Theorem 3.1, printed p. 389 / PDF p. 404.
- **Resultant systems:** Their existence and definition occur in [S2, Ch. IX, Theorem 4.1, printed p. 402, PDF p. 417]. The root-product convention is on printed p. 403 / PDF p. 418. The direct source is Lang; van der Waerden is a historical reference cited there, not a separately verified source in this note.
- **Sylvester convention:** See [S2, Ch. IV, §8, printed pp. 200–203, PDF pp. 215–218]. The references to IV §10 in IX §4 are outdated for this edition; the relevant section is IV §8.
- **Independent derivations:** The linked exercises establish agreement of the two resultant definitions, the binary identities, the gcd factorization for finite projective zero sets, and absolute irreducibility after field reduction. The three examples above are direct computations, not examples claimed to be worked out in the source.
- **Verification boundary:** The specific source anchors above were checked against rendered pages. The frontmatter retains `partially-verified` because this is a bounded source check, not verification of every page in §§3–4 or of the cited external literature. The gcd exponents of an arbitrary resultant system are not asserted to be intrinsic geometric multiplicities.
