---
title: "Exercise LA392: Adjacent Fibre Comparison and Free Cohomology"
topic: module-theory
difficulty: advanced
status: not-started
tags:
  - exercise
  - module-theory
  - cohomology
  - base-change
source: "Serge Lang, Algebra, rev. 3rd ed., Ch. X, Exercise 19, printed pp. 446-447, PDF pp. 461-462"
created: 2026-09-22
---

# Exercise LA392: Adjacent Fibre Comparison and Free Cohomology

## Problem Statement

> [!question] Exercise 19
> Let $A$ be a Noetherian local ring. Let $K$ be a complex as in the previous exercise. For some $i$ assume that
>
> $$
> H^i(K)(\mathfrak m)\longrightarrow H^i(K(\mathfrak m))
> $$
>
> is surjective (or equivalently, is an isomorphism by the previous exercise). Prove that the following conditions are equivalent:
>
> (a) $H^{i-1}(K)(\mathfrak m)\to H^{i-1}(K(\mathfrak m))$ is surjective.
>
> (b) $H^{i-1}(K)(\mathfrak m)\to H^{i-1}(K(\mathfrak m))$ is an isomorphism.
>
> (c) $H^i(K)$ is free.
>
> **Printed hint.** Lift bases until you are blue in the face.
>
> (d) If these conditions hold, then each one of the two inclusions
>
> $$
> \operatorname{Im}d^{i-1}\subset\ker d^i\subset K^i
> $$
>
> splits, and each one of these modules is free. Reducing mod $\mathfrak m$ yields the corresponding inclusions
>
> $$
> \operatorname{Im}d^{i-1}_{(\mathfrak m)}
> \subset\ker d^i_{(\mathfrak m)}\subset K^i(\mathfrak m),
> $$
>
> and induce the isomorphism on cohomology as stated in (b). **Printed hint.** Apply the preceding exercise.

> [!info] Complex and comparison conventions
> As in Exercise 18, $K$ is a finite complex of finite free $A$-modules, $d^j:K^j\to K^{j+1}$, $H^j=\ker d^j/\operatorname{Im}d^{j-1}$, and $M(\mathfrak m)=M/\mathfrak mM$. The shared preamble's printed index errors are recorded in [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change|Complexes and Cohomology under Base Change]].

> [!warning] Source issue: the final degree reference in (d)
> The source's final phrase “as stated in (b)” is retained above. Part (b) concerns degree $i-1$, whereas the displayed inclusions in (d) concern degree $i$ and directly induce the degree-$i$ comparison isomorphism. We prove both statements, while distinguishing their degrees; the displayed degree-$i$ quotient must not be identified with $H^{i-1}$.

## Hints

> [!hint]- Hint 1
> The standing hypothesis and Exercise 18 already make $Z^i=\ker d^i$ a finite free direct summand of $K^i$. If (a) holds, apply Exercise 18 one degree earlier to split the inclusion of $B^i=\operatorname{Im}d^{i-1}$ into $K^i$.

> [!hint]- Hint 2
> For the converse, if $H^i(K)$ is free, split $Z^i\twoheadrightarrow H^i(K)$ by lifting a basis. This makes $B^i$ free. Lift a basis of $B^i$ through $K^{i-1}\twoheadrightarrow B^i$, then compute cohomology after reduction using the resulting splittings.

## Solution

> [!success]- Independently derived solution
> Put $k=A/\mathfrak m$ and $\beta^j:H^j(K)\otimes_Ak\to H^j(K\otimes_Ak)$. Write $Z^j=\ker d^j$ and $B^j=\operatorname{Im}d^{j-1}$, extending the complex by zero outside its finite range.
>
> The standing surjectivity of $\beta^i$ lets us apply Exercise 18, proved in [[04 - Linear Algebra and Modules/Exercises/Exercise LA391 - Surjective Fibre Comparison Splits the Differential|Exercise LA391]]. In particular $Z^i$ is finite free, $K^i=Z^i\oplus C$ for some finite free complement $C$, and the image of $d^i$ is a direct summand of $K^{i+1}$.
>
> **(a) is equivalent to (b).** Apply Exercise 18 in degree $i-1$: surjectivity of $\beta^{i-1}$ implies that it is an isomorphism. Conversely every isomorphism is surjective.
>
> **(a) implies (c).** Exercise 18 in degree $i-1$ also shows that $B^i$ is finite free and its inclusion into $K^i$ has a retraction $\rho:K^i\to B^i$. Since $B^i\subseteq Z^i$, restriction gives a retraction $\rho|_{Z^i}$. Consequently
>
> $$
> Z^i=B^i\oplus T,\qquad T=\ker(\rho|_{Z^i}),\qquad
> H^i(K)\cong T.
> $$
>
> The module $T$ is a finite direct summand of the finite free module $Z^i$, so it is free by the local projective-freeness lemma proved in the concept note. This proves (c).
>
> **(c) implies (b), hence (a).** Suppose $H^i(K)$ is free. Lift a basis through $Z^i\twoheadrightarrow H^i(K)$ to split its quotient sequence:
>
> $$
> Z^i=B^i\oplus T,\qquad T\cong H^i(K).
> $$
>
> Thus $B^i$ is a finite direct summand of the finite free module $Z^i$, hence is free. Combining with the standing decomposition gives $K^i=B^i\oplus T\oplus C$, so the inclusion of $B^i$ into $K^i$ splits.
>
> Lift a basis of $B^i$ through $d^{i-1}:K^{i-1}\twoheadrightarrow B^i$. Its lifts define a section and yield
>
> $$
> K^{i-1}=Z^{i-1}\oplus D,
> \qquad d^{i-1}|_D:D\xrightarrow{\sim}B^i.
> $$
>
> Because $B^i\hookrightarrow K^i$ also splits, reduction modulo $\mathfrak m$ identifies $Z^{i-1}\otimes_Ak$ with $\ker(d^{i-1}\otimes1)$. Tensoring the right-exact sequence $K^{i-2}\to Z^{i-1}\to H^{i-1}(K)\to0$ therefore gives
>
> $$
> H^{i-1}(K)\otimes_Ak
> \cong
> \frac{\ker(d^{i-1}\otimes1)}{\operatorname{Im}(d^{i-2}\otimes1)}
> =H^{i-1}(K\otimes_Ak).
> $$
>
> On cycle representatives this is $\beta^{i-1}$, proving (b).
>
> **(d): the two split inclusions and the degree-$i$ quotient.** Under the equivalent conditions, the constructions above give
>
> $$
> K^i=B^i\oplus T\oplus C,\qquad
> Z^i=B^i\oplus T,\qquad T\cong H^i(K),
> $$
>
> with all three summands free. Thus $B^i\hookrightarrow Z^i$ and $Z^i\hookrightarrow K^i$ split, and all the modules listed in the question are free.
>
> The standing outgoing splitting identifies $Z^i\otimes_Ak$ with $\ker d^i_{(\mathfrak m)}$. The splitting of $B^i\hookrightarrow K^i$, together with surjectivity of $K^{i-1}\twoheadrightarrow B^i$ after tensoring, identifies $B^i\otimes_Ak$ with $\operatorname{Im}d^{i-1}_{(\mathfrak m)}$. Hence reduction yields exactly the two displayed inclusions in (d), and their quotient gives
>
> $$
> H^i(K)\otimes_Ak
> \cong T\otimes_Ak
> \cong H^i(K\otimes_Ak).
> $$
>
> This is the degree-$i$ comparison map $\beta^i$. The degree-$(i-1)$ isomorphism asserted in (b) was proved separately above, resolving the source's final reference without changing either cohomology degree.

## Related Concepts

- [[04 - Linear Algebra and Modules/Concepts/Module Support and Fibers|Module Support and Fibers]]
- [[04 - Linear Algebra and Modules/Concepts/Complexes and Cohomology under Base Change|Complexes and Cohomology under Base Change]]
- [[04 - Linear Algebra and Modules/Concepts/Projective Modules and Grothendieck Groups|Projective Modules]]
- [[04 - Linear Algebra and Modules/Concepts/Exact Sequences|Exact Sequences]]
- [[04 - Linear Algebra and Modules/Concepts/Free Modules|Free Modules]]
- [[02 - Ring Theory/Concepts/Local Rings|Local Rings]]
- [[04 - Linear Algebra and Modules/Exercises/Exercise LA391 - Surjective Fibre Comparison Splits the Differential|Exercise LA391]]

## Notes

- **Source status:** The standing hypothesis, (a)-(d), and both printed hints were visually checked at [S2, Ch. X, Ex. 19, printed pp. 446-447, PDF pp. 461-462]. The argument is independently derived.
- **Logical structure:** Parts (a), (b), and (c) are equivalent under the standing degree-$i$ hypothesis. Part (d) records their consequences; it is not a fourth condition to insert into the equivalence without qualification.
- **Dependency status:** Exercise 18 is invoked with its full proved vault solution. Basis lifting, splitting, and local projective freeness are the only additional ingredients; no spectral sequence or general base-change theorem is used.
