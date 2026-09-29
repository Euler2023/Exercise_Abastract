---
title: Exterior Algebra
aliases:
  - Alternating Algebra
  - Grassmann Algebra
  - Exterior Powers
topic: module-theory
tags:
  - concept
  - definition
  - module-theory
  - exterior-algebra
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. XIX, section 1, printed pp. 731-734, PDF pp. 746-749; Exercises 1-5, printed pp. 753-754, PDF pp. 768-769"
source_status: verified-with-corrections
status: not-started
created: 2026-09-29
---

# Exterior Algebra

## Definition

> [!info] Universal alternating product
> Let $R$ be a commutative ring and $E$ an $R$-module. The exterior algebra is
>
> $$
> \bigwedge E=T(E)/\langle v\otimes v:v\in E\rangle,
> \qquad \bigwedge E=\bigoplus_{r\ge0}\bigwedge^r E.
> $$
>
> Here $T(E)=\bigoplus_{r\ge0}E^{\otimes r}$ and $\bigwedge^0E=R$. Its degree-$r$ quotient represents alternating $r$-multilinear maps:
>
> $$
> \operatorname{Hom}_R(\bigwedge^rE,M)
> \cong\operatorname{Alt}_R^r(E,M).
> $$

The element represented by $v_1\otimes\cdots\otimes v_r$ is written $v_1\wedge\cdots\wedge v_r$. The quotient relation makes $v\wedge v=0$, and applying it to $v+w$ gives $v\wedge w=-w\wedge v$. The latter identity alone would not imply $v\wedge v=0$ when $2$ is not invertible. Using swaps to bring repeated factors together shows that the ideal above kills every tensor with two equal entries, giving Lang's degreewise universal property.

## Intuition

The wedge product records an ordered family while discarding repetitions and linear dependence. A nonzero decomposable degree-$r$ vector over a field determines an $r$-dimensional subspace, together with a nonzero scale in its determinant line. General exterior vectors need not be decomposable.

## Key Properties

### Basis, degree, and maps

For a free module with basis $e_1,\ldots,e_n$, the monomials

$$
e_{i_1}\wedge\cdots\wedge e_{i_r},
\qquad i_1<\cdots<i_r,
$$

form a basis of $\bigwedge^rE$, of rank $\binom nr$. Reordering and deleting repetitions prove spanning. For each increasing set $I$, the determinant of the selected coordinate rows is an alternating form which takes value $1$ on $e_I$ and $0$ on the other increasing basis candidates; these forms prove independence. Hence $\bigwedge^rE=0$ for $r>n$ and the full exterior algebra has rank $2^n$.

A linear map $f:E\to F$ induces $\bigwedge^r f$ by applying $f$ to every factor. The universal property proves that this is well-defined and that exterior powers respect composition and identities. For homogeneous elements of degrees $r,s$, swapping the factors gives

$$
u\wedge v=(-1)^{rs}v\wedge u.
$$

### Determinants and duality

If $E$ is free of rank $n$, its determinant module is $\det E=\bigwedge^nE$. For $f:E\to E$, $\bigwedge^n f$ is scalar multiplication by $\det f$. More generally,

$$
\det(TI-f)=\sum_{r=0}^n(-1)^r
\operatorname{tr}(\bigwedge^r f)T^{n-r}.
$$

The finite free duality is

$$
\bigwedge^r(E^\vee)\cong(\bigwedge^rE)^\vee,
\qquad
\langle v_1\wedge\cdots\wedge v_r,\lambda_1\wedge\cdots\wedge\lambda_r\rangle
=\det(\lambda_j(v_i)).
$$

The increasing exterior bases and their duals verify this isomorphism. Evaluating the same determinant after $f$ proves that exterior powers commute with transposes. The linked exercises give the full coefficient and pairing proofs.

### Alternating forms and contraction

The alternating forms $\Omega(E)=\bigoplus_r\operatorname{Alt}^r_R(E,R)$ carry the shuffle product

$$
(\omega\wedge\psi)(v_1,\ldots,v_{r+s})
=\sum_{\sigma\in\operatorname{Sh}(r,s)}
\operatorname{sgn}(\sigma)\,
\omega(v_{\sigma(1)},\ldots,v_{\sigma(r)})
\psi(v_{\sigma(r+1)},\ldots,v_{\sigma(r+s)}).
$$

Here each of the two blocks is increasing. No division by $r!s!$ is made. For finite free $E$, the determinant pairing identifies this algebra with $\bigwedge(E^\vee)$: on dual exterior basis elements the shuffle product is zero for overlapping index sets, and otherwise is the concatenated exterior basis element with its sorting sign. Thus the pairing identification preserves multiplication. This identification is not asserted for an arbitrary module.

For $\lambda\in E^\vee$, contraction is the degree-$-1$ operator

$$
\iota_\lambda(v_1\wedge\cdots\wedge v_r)
=\sum_{j=1}^r(-1)^{j-1}\lambda(v_j)
v_1\wedge\cdots\wedge\widehat v_j\wedge\cdots\wedge v_r,
\qquad \iota_\lambda(1)=0.
$$

The alternating formula descends to the exterior power. With $\epsilon_v(u)=v\wedge u$, direct expansion gives

$$
\iota_\lambda^2=0,\qquad \epsilon_v^2=0,\qquad
\iota_\lambda\epsilon_v+\epsilon_v\iota_\lambda=\lambda(v)I.
$$

In the first identity the two orders of deleting distinct factors cancel; in the third the term deleting $v$ remains and all other terms cancel. These identities hold in every characteristic.

## Examples

> [!example] Rank two
> For $E=Re_1\oplus Re_2$, the algebra has basis $1,e_1,e_2,e_1\wedge e_2$ and $e_i^2=0$. The coefficient of $e_1\wedge e_2$ in $(ae_1+be_2)\wedge(ce_1+de_2)$ is $ad-bc$.

> [!example] A nondecomposable vector
> Over a field of characteristic different from $2$, put $w=e_1\wedge e_2+e_3\wedge e_4$ in $\bigwedge^2k^4$. Then $w\wedge w=2e_1\wedge e_2\wedge e_3\wedge e_4\ne0$. A decomposable $u\wedge v$ has square zero, so $w$ is not decomposable.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Tensor Product|Tensor Product]]
- [[04 - Linear Algebra and Modules/Concepts/Determinants|Determinants]]
- [[04 - Linear Algebra and Modules/Concepts/Hom Functor|Hom Functor]]
- [[02 - Ring Theory/Concepts/Filtered and Graded Algebras|Filtered and Graded Algebras]]
- [[02 - Ring Theory/Concepts/Clifford Algebras|Clifford Algebras]]

## Exercises

```dataview
TABLE status,difficulty,source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

The definitions, functoriality, and Proposition 1.1 were checked in the original PDF at [S2, Ch. XIX, section 1, printed pp. 731-734, PDF pp. 746-749]. The equivalent ideal presentation, coordinate-form basis proof, contraction identities, and examples above are independent derivations. The determinant, duality, transpose, and shuffle statements are assigned exercises, with full independent proofs in the linked notes. Exercise 5 prints two terminal indices $s$ where $r+s$ is required; its note preserves and explains the correction.
