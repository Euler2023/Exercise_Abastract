---
title: Riemann Surfaces
aliases:
  - Riemann Surface
  - 黎曼曲面
topic: arithmetic-geometry
tags:
  - concept
  - definition
  - arithmetic-geometry
  - complex-curves
  - function-fields
source: "Michael Artin, Algebra, 2nd ed., Ch. 11, §11.9, printed pp. 348-353, PDF pp. 360-365; Ch. 15, §15.9, printed pp. 464-471, PDF pp. 476-483; Serge Lang, Algebra, rev. 3rd ed., Ch. IV, §2, Theorem 2.1, Corollary 2.2 and Theorem 2.3, printed pp. 181-183, PDF pp. 196-198; Ch. VI, §2, Example 9, printed pp. 275-276, PDF pp. 290-291"
source_status: partially-verified
status: not-started
created: 2026-10-14
---

# Riemann Surfaces

## Definition

> [!info] Riemann surface: complex atlas convention
> A **Riemann surface** is a connected, Hausdorff, second-countable space $X$ equipped with an atlas of homeomorphisms
> $$
> z_i:U_i\longrightarrow V_i\subseteq\mathbb C,
> $$
> where each $V_i$ is open and every transition map $z_j\circ z_i^{-1}$ on an overlap is holomorphic. Equivalent compatible atlases define the same complex structure.
> Thus $X$ is a complex manifold of complex dimension $1$, and its underlying real manifold has dimension $2$.

This is the modern complex-atlas definition used for the independent exposition below. It is not claimed to be Artin's verbatim definition: Artin enters through polynomial equations, local implicit functions, and branched coverings.

A map between Riemann surfaces is **holomorphic** if its expression in local complex coordinates is holomorphic. A **meromorphic function** is locally a quotient of holomorphic functions with denominator not identically zero; equivalently, it is a holomorphic map to the Riemann sphere that is not identically infinity, allowing poles.

## Intuition

For $x^2=t$, choosing $x$ as a function of $t$ produces two values away from $t=0$. The surface of pairs $(t,x)$ makes $x$ single-valued; moving around $t=0$ changes which sheet is seen over the base.

The surface and its projection are different objects. A smooth point of the surface can lie over a branch value, and a singular point of a plane equation need not produce nontrivial monodromy after its local branches are separated.

## Artin's Plane Models

Let $f(t,x)\in\mathbb C[t,x]$ be irreducible with positive $x$-degree $n$, and put
$$
X=\{(t,x)\in\mathbb C^2:f(t,x)=0\},\qquad \pi(t,x)=t.
$$
At a point where $f_x\ne0$, the complex polynomial implicit function theorem gives a local holomorphic function $x=x(t)$, so $t$ is a local coordinate. Where $f_t\ne0$, one can instead solve for $t=t(x)$ and use $x$ as a coordinate.

## Ring-Chapter Results Used for Riemann Surfaces

Artin's covering construction depends on specific results from the end of the Rings chapter. The statements below retain their source hypotheses. The proofs are concise independent expansions of source-contained arguments, with the indicated algebraic and analytic inputs made explicit.

### Lemma 11.9.7: Entire Vertical Fibres

> [!abstract] Artin 11.9.7
> Let $f\in\mathbb C[t,x]$ and $a\in\mathbb C$. The entire line $t=a$ is contained in $V(f)$ if and only if $t-a$ divides $f$ in $\mathbb C[t,x]$.
>
> [S1, printed pp. 348-349, PDF pp. 360-361]

**Proof.** Division by the monic polynomial $t-a$, treating the coefficients as elements of $\mathbb C[x]$, gives
$$
f(t,x)=(t-a)q(t,x)+f(a,x).
$$
If $t-a$ divides $f$, then $f(a,x)$ vanishes for every $x$. Conversely, vanishing on the whole line makes the polynomial $f(a,x)$ zero at every complex number. Since $\mathbb C$ is infinite, this polynomial is identically zero, so the displayed division proves the divisibility.

For irreducible $f$ of positive $x$-degree, a factor $t-a$ is impossible. Therefore no entire vertical line lies in this plane model. Exceptional fibres may still have fewer points; this lemma excludes an infinite vertical component, not every exception.

### Proposition 11.9.9: Divisibility Descends from the Fraction Field

> [!abstract] Artin 11.9.9
> Let $h,f\in\mathbb C[t,x]$ be nonzero, and suppose that no polynomial $t-a$, with $a\in\mathbb C$, divides $h$. If $h$ divides $f$ in $\mathbb C(t)[x]$, then $h$ divides $f$ in $\mathbb C[t,x]$.
>
> [S1, printed p. 349, PDF p. 361]

**Proof.** Clear the denominators of the quotient in $\mathbb C(t)[x]$ to obtain
$$
u(t)f(t,x)=h(t,x)q(t,x),\qquad 0\ne u\in\mathbb C[t],\quad q\in\mathbb C[t,x].
$$
If $t-a$ divides $u$, evaluation at $a$ gives $h(a,x)q(a,x)=0$ in the integral domain $\mathbb C[x]$. The hypothesis and Lemma 11.9.7 give $h(a,x)\ne0$, hence $q(a,x)=0$. Thus $t-a$ divides $q$ and can be cancelled from the equality. Factor $u$ into linear factors over $\mathbb C$ and repeat, including multiplicities, until only a nonzero constant remains. Absorb that constant into $q$ to obtain $f=hq_1$ with $q_1\in\mathbb C[t,x]$.

The missing hypothesis cannot be dropped: $h=t$ divides $f=1$ in $\mathbb C(t)[x]$, where $t$ is a unit, but does not divide it in $\mathbb C[t,x]$.

**Lang comparison.** As a polynomial in $x$ over the UFD $R=\mathbb C[t]$, $h$ has no factor $t-a$ exactly when its coefficient content is a unit, that is, when $h$ is primitive. Artin's evaluation-and-cancellation proof is a concrete primitive divisibility descent. Lang's Gauss results treat this principle for a general UFD and its fraction field, without requiring every coefficient prime to be linear [S2, Ch. IV, §2, Thm. 2.1 and Cor. 2.2, printed pp. 181-182, PDF pp. 196-197; Thm. 2.3 and following discussion, printed pp. 182-183, PDF pp. 197-198]. See [[02 - Ring Theory/Concepts/Irreducible Polynomials#Gauss's lemma and primitive polynomials|Gauss's lemma and primitive polynomials]] for the general content argument.

### Theorem 11.9.10: Finite Intersection of Plane Curves

> [!abstract] Artin 11.9.10
> If nonzero $f,g\in\mathbb C[t,x]$ have no common nonconstant factor, then their common zero set $V(f,g)\subseteq\mathbb C^2$ is finite.
>
> [S1, printed pp. 349-350, PDF pp. 361-362]

**Proof.** Put $F=\mathbb C(t)$. A positive-degree gcd in $F[x]$ would, after clearing denominators and removing its coefficient content, give a polynomial $h\in\mathbb C[t,x]$ of positive $x$-degree with no factor $t-a$. Proposition 11.9.9 would make $h$ divide both $f$ and $g$ in $\mathbb C[t,x]$, contradicting the hypothesis. Therefore $f$ and $g$ are coprime in the Euclidean domain $F[x]$. A Bezout identity there, after clearing denominators, gives
$$
0\ne a(t)=r(t,x)f(t,x)+s(t,x)g(t,x),\qquad r,s\in\mathbb C[t,x].
$$
Every common zero has $a(t)=0$. Interchanging the two variables gives a nonzero polynomial $b(x)$ that also vanishes on every common zero. The common-zero set is consequently contained in the finite product of the roots of $a$ and $b$. This proves finiteness, including the empty-intersection case.

The same descent and elimination proof is expanded in [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties#Finite Intersections in the Affine Plane|Finite Intersections in the Affine Plane]]. The assertion here is finiteness; Artin's subsequently stated degree bound and the projective multiplicity version of Bezout's theorem are separate results with separate proof boundaries.

### Theorem 11.9.16: The Finite-Sheeted Projection

> [!abstract] Artin 11.9.16: the finite-sheeted projection
> Outside a finite exceptional set $S\subset\mathbb C$, the polynomial $f(t,x)$ has degree $n$ in $x$ and has $n$ distinct roots. Thus
> $$
> X'=\pi^{-1}(\mathbb C\setminus S)\longrightarrow\mathbb C\setminus S
> $$
> is an unbranched holomorphic covering with $n$ sheets. Artin describes the associated projection as an $n$-sheeted branched covering, allowing the finite excluded set to be enlarged.
>
> [S1, Ch. 11, Definition 11.9.14 and Theorem 11.9.16, printed pp. 351-353, PDF pp. 363-365]

**The proof chain for the plane model.** Write $f=a_n(t)x^n+\cdots+a_0(t)$ with $a_n\ne0$. Since the characteristic is zero, $f_x\ne0$, and its $x$-degree is $n-1$. Irreducibility therefore gives $\gcd(f,f_x)=1$ in $\mathbb C[t,x]$. Theorem 11.9.10 makes $V(f,f_x)$ finite. Hence the exceptional set can be chosen as
$$
S=\{a\in\mathbb C:a_n(a)=0\}\cup\pi\bigl(V(f,f_x)\bigr).
$$
Both sets in this union are finite. Lemma 11.9.7 makes every fibre finite, so deleting the fibres over $S$ removes only finitely many points upstairs. Outside $S$, the specialized polynomial has degree $n$ and no repeated roots, so it has exactly $n$ distinct roots over $\mathbb C$. At each corresponding point $f_x\ne0$, and the complex polynomial implicit function theorem supplies a holomorphic sheet over a small disc in the $t$-plane. Choose a common smaller disc for the $n$ sheets; they remain distinct, and the degree bound leaves no additional roots. This gives an evenly covered neighborhood and proves the asserted covering. Singular points, which have $f_t=f_x=0$, are included among the removed points.

If the equation initially has coefficients in $\mathbb C(t)$, first choose its primitive representative in $\mathbb C[t,x]$. Zeros of coefficient denominators and discarded nonconstant content contribute only finitely many excluded $t$-values; removing the coefficient content prevents artificial vertical components. Similarly, the rational maps in Proposition 15.9.5 exclude zeros of finitely many denominator polynomials. These model exceptions are distinct from genuine ramification. The denominator discussion is an independent synthesis of the preceding algebra and Artin's field-isomorphism construction.

Only the generic fibres are asserted to contain exactly $n$ distinct points. A leading-coefficient exception can lose affine points, and a repeated-root exception can reflect either actual ramification or a singular plane model.

> [!warning] Plane equation, smooth locus, and completed surface
> A singular affine zero set is not itself a Riemann surface at its singular points. Deleting a finite set gives the smooth covering model $X'$. Separating and completing its branches uses **normalization** and, when needed, **compactification**, which are additional geometric inputs. The present note does not attribute their general existence proofs to Artin 11.9.16.

### Earlier Ring Results and Geometric Points

The finite-fibre argument also sits within Artin's earlier ideal-and-point correspondence. These related results are already archived with their proofs and comparison to Lang; they are listed here to make the ring-chapter dependencies visible without repeating those longer arguments.

| Artin result | Role in the geometric interpretation | Source and concept link |
|---|---|---|
| Thm. 11.8.6 | Maximal ideals of $\mathbb C[x_1,\ldots,x_m]$ are evaluation ideals at complex points | Printed pp. 345-347 / PDF pp. 357-359; [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz#Artin's Ring-Chapter Results and Lang's Generalization|Maximal ideals and points]] |
| Thm. 11.9.1 | Points of a zero set correspond to maximal ideals of its quotient presentation, even when that ring has nilpotents | Printed p. 347 / PDF p. 359; [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz#Artin's Ring-Chapter Results and Lang's Generalization|Points and quotient rings]] |
| Cor. 11.9.4 | A system with no complex solution has a polynomial certificate $1=\sum_i g_i f_i$ | Printed p. 348 / PDF p. 360; [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz#Artin's Ring-Chapter Results and Lang's Generalization|Certificate for an inconsistent system]] |

## Key Properties

1. A Riemann surface has complex coordinates locally; one global coordinate need not exist.
2. For a nonconstant holomorphic map, the local analytic form at a point can be written as $w=z^e$ after suitable local coordinates, where $e\ge1$ is the ramification index. This local-form theorem is an external analytic input here.
3. A **ramification point** is a point upstairs with $e>1$; a **branch value** is its image downstairs. These terms refer to the map, not to a singularity of the surface.
4. Away from branch values, following a local inverse around a loop permutes the sheets. Connectedness corresponds to transitivity of the covering's monodromy action; see [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]] for the relevant Artin statements and proof boundaries.
5. Compactness belongs to the surface. Removing branch fibres or points at infinity generally produces a noncompact surface while retaining useful local covering data.

## Examples

### Smooth surface with a ramified projection

For $f(t,x)=x^2-t$, one has $f_t=-1$, so the plane curve is smooth everywhere. The parameterization
$$
s\longmapsto(t,x)=(s^2,s)
$$
identifies the curve with the complex $s$-plane. Under this identification the projection is $s\mapsto s^2$, which ramifies at $s=0$. The branch value is $t=0$, and a positive loop around it interchanges the two sheets.

Adding the point at infinity gives a map of Riemann spheres. Its local expression near infinity is again a square map, using $u=1/t$ and $v=1/s$ with $u=v^2$.

### A cusp needs a smooth parameter

The curve $x^2=t^3$ is singular at $(0,0)$ because both partial derivatives vanish there. Its parameterization is
$$
s\longmapsto(t,x)=(s^2,s^3).
$$
For $s\ne0$, the inverse parameter is $s=x/t$. This identifies the punctured curve with a punctured complex plane; adding $s=0$ on the parameter plane produces the smooth normalization. The plane cusp remains singular in its original embedding, while the normalized projection $t=s^2$ has ramification index $2$.

Algebraically, the coordinate ring is $A=\mathbb C[s^2,s^3]$. Its fraction field contains $s=s^3/s^2$, and $s$ is integral over $A$ because $s^2\in A$. Since $\mathbb C[s]$ is a PID and hence integrally closed, it is the integral closure of $A$ in their common fraction field. This verifies the particular normalization model without establishing existence of normalization for every algebraic curve.

### A node has two local branches

Consider $x^2=t^2(1+t)$. Near $t=0$, the holomorphic square root $h(t)=\sqrt{1+t}$ with $h(0)=1$ gives two local branches
$$
x=t h(t),\qquad x=-t h(t).
$$
They meet at the singular point $(0,0)$ in the plane model. On the normalization they correspond to two different points, each with local coordinate $t$. A small loop around $0$ preserves each branch, so its local monodromy is the identity even though the affine fibre has a repeated root.

## Function Fields and Compactness

Write $\mathcal M(X)$ for the field of meromorphic functions on a connected Riemann surface $X$. For a compact surface, a nonconstant meromorphic function $t$ defines a finite map
$$
t:X\longrightarrow\mathbb P^1(\mathbb C).
$$
The field $\mathcal M(X)$ is then a finite extension of $\mathbb C(t)$, and its degree equals the degree of this map. Existence of such a nonconstant function on every compact Riemann surface and the complete algebraic-analytic correspondence are external geometric/analytic inputs here; neither follows merely from the local implicit function theorem.

Conversely, a finite extension of $\mathbb C(t)$ has a smooth projective curve model, whose complex points form a compact Riemann surface. The general construction of this model is also an external input in this note. Artin's polynomial coverings provide concrete access to parts of this correspondence.

> [!warning] Noncompact meromorphic functions are a broader setting
> For a noncompact Riemann surface $U$, its full field $\mathcal M(U)$ is not automatically a finitely generated one-variable algebraic function field. Lang XII, Exercise 20 uses this analytic meromorphic-function field and imports additional analysis in the vault's solution. It must not be identified without further hypotheses with Artin's finite extensions of $\mathbb C(t)$.

The field definitions, finite-generation hypotheses, constant-field conventions, and algebraic viewpoint are collected in [[03 - Field Theory/Concepts/Function Fields|Function Fields]].

## Artin and Lang Compared

| Viewpoint | Artin | Lang |
|---|---|---|
| Entry point | Complex plane equations, local roots, sheets, and gluing | Field extensions, automorphisms, and algebraic function fields |
| Base field in the geometric discussion here | $\mathbb C$, with analytic continuation | The complex-geometric illustration in VI §2, Example 9; other algebraic discussions allow more general fields |
| Smoothness | The polynomial implicit function theorem handles the nonsingular locus | The geometric illustration presupposes its surface framework rather than constructing an atlas or normalization |
| Covers and fields | 15.9 relates finite extensions of $\mathbb C(t)$ to coverings | VI §2, Example 9 uses punctured-sphere coverings to realize finite Galois groups |
| Proof boundary | General Riemann existence is explicitly not proved | Geometric background in the example is not a general construction theorem |

Artin 15.9.5 shows how an isomorphism of extensions of $\mathbb C(t)$ produces mutually inverse rational maps on suitable open covering models [S1, printed p. 465, PDF p. 477]. This connects the algebraic field description to $X'$, while preserving the distinction between an open plane model and a complete smooth surface.

Lang explicitly addresses readers already familiar with Riemann surfaces and coverings. He uses the sphere with $n+1$ punctures and its free fundamental group on $n$ generators. A surjection onto a finite group generated by $n$ elements gives a normal finite-index kernel, hence a corresponding Galois covering and Galois extension of $\mathbb C(t)$ with that group. The covering-field correspondence and fundamental-group facts are imported geometric background in this example, not foundational proofs supplied there.

Lang then turns to descent from $\mathbb C(t)$ to $\mathbb Q(t)$ and to rigidity conditions. The realization over the complex function field does not by itself prove realization over the rational function field or over $\mathbb Q$ [S2, Ch. VI, §2, Example 9, printed pp. 275-276, PDF pp. 290-291]. The broader algebraic comparison, including general constant fields and rational-function degrees, belongs in [[03 - Field Theory/Concepts/Function Fields|Function Fields]].

### The affine base and the point at infinity

Artin's cut-plane description uses finite branch values in $\mathbb C$. A compact model instead maps to $\mathbb P^1(\mathbb C)$, so the fibre at infinity must also be considered. After fixing compatible loop conventions, the product of local monodromies around all branch values on the sphere is the identity. Thus finite monodromy data determine the monodromy at infinity through this relation.

The product relation is topological background here. Changing the order, orientation, or composition convention changes its written form; see [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]] for the conventions used in the exercise calculations.

> [!warning] Source issue in Artin's covering examples
> Artin 15.9.14(b) contains an incomplete uniqueness assertion for a pair of gluing permutations, and nearby displayed data require corrections. Do not infer that transitivity and one transposition alone determine the second permutation. The verified corrections and counterexample are recorded under [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy#Source Issues|Branch Points and Monodromy: Source Issues]].

## Related Concepts

- [[03 - Field Theory/Concepts/Function Fields|Function Fields]]
- [[08 - Arithmetic Geometry/Concepts/Branch Points and Monodromy|Branch Points and Monodromy]]
- [[08 - Arithmetic Geometry/Concepts/Implicit Function Theorem for Complex Polynomials|Implicit Function Theorem for Complex Polynomials]]
- [[08 - Arithmetic Geometry/Concepts/Algebraic Varieties|Algebraic Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Affine and Projective Varieties|Affine and Projective Varieties]]
- [[08 - Arithmetic Geometry/Concepts/Valuations and Places|Valuations and Places]]
- [[03 - Field Theory/Concepts/Transcendence Bases and Transcendence Degree|Transcendence Bases and Transcendence Degree]]
- [[02 - Ring Theory/Concepts/Irreducible Polynomials|Irreducible Polynomials]]
- [[02 - Ring Theory/Concepts/Hilbert Nullstellensatz|Hilbert Nullstellensatz]]
- [[02 - Ring Theory/Concepts/Integral Ring Extensions and Integrally Closed Domains|Integral Ring Extensions and Integrally Closed Domains]]

## Exercises

```dataview
TABLE status, difficulty, source
FROM #exercise
WHERE contains(file.outlinks, this.file.link)
SORT file.name ASC
```

## Source and Proof Status

- **Source-contained ring results:** Lemma 11.9.7, Proposition 11.9.9, Theorems 11.9.10 and 11.9.16, and the finite-exception convention of Definition 11.9.14 were checked at [S1, Ch. 11, §11.9, printed pp. 348-353, PDF pp. 360-365]. Their arguments above are concise independent expansions of the source proofs. The polynomial implicit function theorem is the analytic input in the projection argument; it does not supply general normalization or compactification.
- **Source-contained field comparison:** Artin 15.9.5 gives rational maps from field isomorphisms on suitable open models [S1, printed p. 465, PDF p. 477]. The continuation, gluing, and projective viewpoint were checked in [S1, Ch. 15, §15.9, printed pp. 464-471, PDF pp. 476-483].
- **Stated without a general proof:** Artin's Riemann Existence Theorem 15.9.4 explicitly omits its long general proof [S1, printed p. 465, PDF p. 477]. The quadratic case has an independent derivation in the linked exercise collection.
- **Independent exposition:** The atlas convention, distinctions between singularity and ramification, the primitive-model denominator discussion, and the square-root, cusp, and nodal computations are written for this vault. They are not presented as quotations or general theorems proved in the cited book slices. The primitive-divisibility comparison uses the checked general-UFD Gauss results in [S2, Ch. IV, §2, printed pp. 181-183, PDF pp. 196-198].
- **External inputs:** General normalization and compactification, the local analytic ramification form, and the full correspondence between compact Riemann surfaces and one-variable complex algebraic function fields are named but not proved here. Lang's VI §2, Example 9 supplies a geometric illustration rather than proofs of those foundations; the note remains `partially-verified`.
