---
title: "Exercise MF40: Prime Level Fundamental Domains and Genus"
topic: modular-forms
difficulty: advanced
status: not-started
tags:
  - exercise
  - modular-forms
source: "Fred Diamond and Jerry Shurman, A First Course in Modular Forms, GTM 228, Springer, 2005, corrected fourth printing 2016, Ch. 3, Section 3.1, Exercise 3.1.4, printed pp. 70–71, PDF pp. 84–85"
source_refs:
  - "S7/ch-3/sec-1/ex-4"
created: 2026-10-28
---

# Exercise MF40: Prime Level Fundamental Domains and Genus

## Problem Statement

> [!question] Original Exercise 3.1.4
> Let $p$ be prime, let $X_0(p)=\Gamma_0(p)\backslash\mathcal H^*$, let $\alpha_j=\begin{pmatrix}1&0\\j&1\end{pmatrix}$ for $j=0,\ldots,p-1$, and let $\alpha_\infty=\begin{pmatrix}1&-1\\1&0\end{pmatrix}$.
>
> (a) Show that $\operatorname{SL}_2(\mathbb Z)=\bigsqcup_j\Gamma_0(p)\alpha_j$, a disjoint union (including $j=\infty$).
>
> (b) Show that $X_0(p)$ has exactly two cusps. (Hints for this exercise are at the end of the book.)
>
> (c) Show that $\gamma\alpha_j(i)=\alpha_j(i)$ for some $\gamma\in\Gamma_0(p)$ of order four if and only if $j^2+1\equiv0\pmod p$. Thus the number of period-two elliptic points is the number of roots of $x^2+1$, namely two if $p\equiv1\pmod4$, zero if $p\equiv3\pmod4$, and one if $p=2$.
>
> (d) Show that $\gamma\alpha_j(\mu_3)=\alpha_j(\mu_3)$ for some $\gamma\in\Gamma_0(p)$ of order six if and only if $j^2-j+1\equiv0\pmod p$. Thus the number of period-three elliptic points is the number of roots of $x^2-x+1$, namely two if $p\equiv1\pmod3$, zero if $p\equiv2\pmod3$, and one if $p=3$. Along with(c), this shows that the number of elliptic points is determined by $p\pmod{12}$. The example $p=13$ in the text is the smallest where all four possible elliptic points exist.
>
> (e) Let $g$ be the genus and $k=p+1$. Show that $g=\lfloor k/12\rfloor-1$ if $k\equiv2\pmod{12}$, and $g=\lfloor k/12\rfloor$ otherwise. (The symbol $k$ is introduced because the same formula with $k$ as weight recurs later.)
>
> (f) Figure3.1 was generated using $\beta_j=\begin{pmatrix}1&0\\j&1\end{pmatrix}S$, $j=-6,\ldots,6$, and $\beta_\infty=T^{-1}\alpha_\infty S$, where $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, $T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$. Find each translate $\beta_j(\mathcal D)$ in the figure, with $\mathcal D$ the Chapter2 fundamental domain. Show that its13 points of $\operatorname{SL}_2(\mathbb Z)(i)$ are $\beta_j(i)$ for $j=-6,\ldots,6$. Since $S$ fixes $i$, the period-two elliptic points are those with $j^2+1\equiv0\pmod{13}$. Show that $\gamma\beta_j(i)=\beta_{j'}(i)$ for some $\gamma\in\Gamma_0(13)$ and $j'\ne j$ if and only if $jj'+1\equiv0\pmod{13}$. Partition them into eight classes: five pairs of angle-$\pi$ points; one singleton of angle $2\pi$; and two angle-$\pi$ singletons representing unramified points. Identify boundary arcs pairwise except for two that fold onto themselves.
>
> Note that $\operatorname{SL}_2(\mathbb Z)(\mu_3)=\operatorname{SL}_2(\mathbb Z)(\mu_6)$, and $S\mu_6=\mu_3$. Thus the period-three elliptic points are $\beta_j(\mu_6)$ with $j^2-j+1\equiv0\pmod{13}$. Show that the14 points in the figure are $\beta_j(\mu_6)$ for $j=-6,\ldots,6,\infty$. Show that $\gamma\beta_j(\mu_6)=\beta_{j'}(\mu_6)$ for some $\gamma\in\Gamma_0(13)$, $j'\ne j$, if and only if $jj'-j+1\equiv0$ or $jj'-j'+1\equiv0\pmod{13}$. Partition the14 points into six classes: one with four points, two of angle $2\pi/3$ and two of angle $\pi/3$; two triples of angle-$2\pi/3$ points; one pair of angle-$\pi$ points; and two singletons of angle $2\pi/3$, representing unramified points. Determine whether each boundary-arc identification preserves or reverses orientation, and show the resulting surface is a sphere.
>
> (g) Carry out the same process for $X_0(11)$ and $X_0(17)$, convincing yourself that they are tori in accordance with(e).

> [!warning] Source issue
> The printed14-vertex list in(f) duplicates a point: $\beta_\infty=-I$, so $\beta_\infty\mu_6=\mu_6=\beta_1\mu_6$. It omits the lower endpoint $\beta_7\mu_6$. The correct14 distinct geometric vertices are $\beta_j\mu_6$ for $j=-6,\ldots,7$. Their endpoint labels $-6,7$ give the same coset modulo13 but distinct points, so they also require the identity-coset equivalence $j\equiv j'\pmod{13}$ in addition to the two printed congruences. The printed statement is preserved above; all geometric counts below use this explicit correction.

## Source Figures

![[Attachments/diamond-shurman-ch03-fig-3.1.png]]

- Figure3.1, “Fundamental domain for $\Gamma_0(13)$,” printed p.69 / PDF83.
- Asset type: direct crop of the original200dpi source rendering; full geometric configuration and caption preserved.

## Hints

> [!hint]- Hint 1
> Left cosets are primitive bottom rows modulo $p$ up to nonzero scalar. Stabilizers act on these rows on the right.

> [!hint]- Hint 2
> For the picture use $\beta_j=ST^{-j}$, $w_j=\beta_ji$, $v_j=\beta_j\mu_6$. Pair $j$ with $-1/j$ modulo $p$ along circular arcs.

> [!hint]- Hint 3
> Correct the duplicated vertex label before counting cells. Subdivide circular arcs at $w_j$, include the two cusps, and compute $V-E+F$.

## Solution

> [!success]- Solution
> **Proof scope:** Independent derivation.
>
> **(a)** Two determinant-one matrices have the same left $\Gamma_0(p)$ coset exactly when their bottom rows modulo $p$ are proportional: the lower-left entry of their quotient is the determinant of those rows. The rows $(j,1)$ and $(1,0)$ are the $p+1$ points of $\mathbb P^1(\mathbb F_p)$, proving disjointness and completeness.
>
> **(b)** A primitive fraction $a/c$ with $p\mid c$ is the image of infinity under a determinant-one completion of its first column, which then lies in $\Gamma_0(p)$. If $p\nmid c$, solve $xc-apy=1$ and use $\begin{pmatrix}x&a\\py&c\end{pmatrix}\in\Gamma_0(p)$ to map zero to $a/c$. These two orbits are distinct: a matrix in $\Gamma_0(p)$ sending infinity to zero would have top-left entry zero and determinant $-bc=1$ with $p\mid c$, impossible. Their widths are one at infinity and $p$ at zero, so their sum is $p+1$.
>
> **(c)** The stabilizer of $i$ is generated by $S$, of order four. Thus the required element is a conjugate of $S$ or $S^{-1}$, and
> $$
> \alpha_j S\alpha_j^{-1}=\begin{pmatrix}j&-1\\j^2+1&-j\end{pmatrix}.
> $$
> It belongs to $\Gamma_0(p)$ exactly under the stated congruence. The infinite coset does not fix under right $S$. More explicitly a point over $i$ is an orbit of the order-two action on the coset set; period-two points are exactly its fixed cosets, so distinct fixed cosets give distinct points. Cyclicity of $\mathbb F_p^\times$ gives the root counts, with the repeated root modulo two checked separately.
>
> **(d)** Replace $S$ by $C=ST$, which fixes $\mu_3$ and has order six. Then
> $$
> \alpha_j C\alpha_j^{-1}=\begin{pmatrix}j&-1\\j^2-j+1&1-j\end{pmatrix}.
> $$
> Its bottom-left congruence gives the assertion; again the infinite coset is not fixed. For $p\ne3$, roots correspond after negation to nontrivial cube roots of unity, giving two or zero according to $p\pmod3$ (there are none modulo two). Modulo three there is one root. This proves the counts, distinctness, and the assertion about13.
>
> **(e)** The genus formula with degree $p+1$ and two cusps reduces to
> $$
> g=(p+1)/12-\varepsilon_2/4-\varepsilon_3/3.
> $$
> For $p>3$, writing $p=12m+r$ for $r=1,5,7,11$ gives respectively $m-1,m,m,m+1$, exactly the stated floor formula for $k=p+1$. At $p=2,3$, direct substitution gives zero, also agreeing with that formula.
>
> **(f): exact geometry and identifications.** Let $h=6$. The upper tile is $\beta_\infty\mathcal D=\mathcal D$, since $\beta_\infty=-I$. Each other tile is
> $$
> \beta_j\mathcal D=\{-1/(z-j):z\in\mathcal D\},\qquad -6\le j\le6,
> $$
> the fan sector with cusp zero and vertices $v_j,v_{j+1}$, because $\beta_j\mu_3=\beta_{j+1}\mu_6$. This identifies each tile by its consecutive fan rays, from left to right. The genuine finite boundary vertices are $v_j$ for $-6\le j\le7$; $v_0=\mu_3$, $v_1=\mu_6$. Their angles are $\pi$ at $j=0,1$, $\pi/3$ at $j=-6,7$, and $2\pi/3$ at all other labels. The13 distinct points $w_j=\beta_ji$ lie at the midpoints of the corresponding circular arcs, except $w_0=i$, which is interior to the union.
>
> Right $S$ on the coset labels is $j\mapsto-1/j$, exchanging $0,\infty$. Thus $w_j\sim w_{j'}$ for distinct finite labels exactly when $jj'+1=0$ modulo13. Its classes in the geometric picture are
> $$
> \{-6,-2\},\ \{-5\},\ \{-4,-3\},\ \{-1,1\},\ \{0\},\ \{2,6\},\ \{3,4\},\ \{5\}.
> $$
> The five pairs have total angle $2\pi$; $\{0\}$ has angle $2\pi$ already; the two singleton roots $\pm5$ have angle $\pi$ and period two.
>
> Let $A_j$ be the boundary circular arc with endpoints $v_j,v_{j+1}$, $j\ne0$. If $k\equiv-1/j\pmod{13}$, its pairing with $A_k$ is induced by
> $$
> g_{jk}=\beta_kS\beta_j^{-1}=\begin{pmatrix}j&-1\\jk+1&-k\end{pmatrix}\in\Gamma_0(13).
> $$
> It maps $v_j\mapsto v_{k+1}$ and $v_{j+1}\mapsto v_k$. The pairs are $(-6,-2),(-4,-3),(-1,1),(2,6),(3,4)$, while $A_{-5},A_5$ fold onto themselves, fixing $w_{-5},w_5$. The two upper vertical edges are paired by $T$. The two outer fan rays from zero to $v_{-6},v_7$ are paired by $U=\begin{pmatrix}1&0\\13&1\end{pmatrix}$: substitution shows $Uv_{-6}=v_7$ and $U0=0$.
>
> To calculate vertex equivalence, put $R=TS$, which fixes $\mu_6$. Right $R$ acts by $j\mapsto1/(1-j)$, with $1\mapsto\infty\mapsto0\mapsto1$. Its other two-cycle-step formulas give exactly $jj'-j+1=0$ or $jj'-j'+1=0$ for distinct coset labels. In the corrected geometric list, the additional labels $-6,7$ represent the same coset and are identified by $U$. The complete vertex classes are
> $$
> \{-6,-1,2,7\},\quad\{-5,-4,-2\},\quad\{-3\},\quad\{0,1\},\quad\{3,5,6\},\quad\{4\}.
> $$
> Their total angles are respectively $2\pi,2\pi,2\pi/3,2\pi,2\pi,2\pi/3$. The singleton roots $-3,4$ are the two period-three points. These explicit classes verify the requested angle distribution.
>
> All pairings are holomorphic and preserve ambient surface orientation. On the *induced orientations of the two polygon boundary sides*, they reverse direction, as required to glue an oriented surface. In particular each $g_{jk}$ reverses the two endpoint labels above; $T$ reverses the induced directions of the two vertical sides; and $U$ does so for the outer rays. If both rays are instead parametrized from zero toward their other endpoint, $U$ preserves those parameter directions. Subdividing the self-folded arcs at their fixed midpoints makes these ordinary paired sides.
>
> After subdividing every circular boundary arc at $w_j$, the polygon has $2p+2=28$ sides, so $E=14$ after gluing and $F=1$. The $w$-vertices on the boundary give $(p-1+\varepsilon_2)/2=7$ classes (exclude the interior $w_0$); the $v$-vertices give $(p+1+2\varepsilon_3)/3=6$ classes; and the two cusps add two vertices. Thus $V=15$, $\chi=15-14+1=2$. The local angle gluings, including the folded elliptic sectors and compactified cusp disks, produce a connected compact orientable surface. The classification of compact orientable surfaces therefore identifies it as a sphere.
>
> **(g): full corresponding computations.** For $p=11$ use $h=5$, and for $p=17$ use $h=8$. In both cases take the tiles $\mathcal D$ and $\beta_j\mathcal D$ for $-h\le j\le h$, with vertices $v_{-h},\ldots,v_{h+1}$. The same matrices $g_{jk}$ (now with $p\mid jk+1$), $T$, and $\begin{pmatrix}1&0\\p&1\end{pmatrix}$ give every boundary identification. The complete arc pairings and fixed arcs are
>
> | $p$ | Distinct arc pairs $(j,k)$ | Self-folded arcs |
> |---|---|---|
> | $11$ | $(-5,-2),(-4,3),(-3,4),(-1,1),(2,5)$ | none |
> | $17$ | $(-8,-2),(-7,5),(-6,3),(-5,7),(-3,6),(-1,1),(2,8)$ | $-4,4$ |
>
> The $w$-point classes are these pairs and folded singletons, together with the interior singleton $\{0\}$. Thus at11 there are six classes with no period-two points; at17 there are ten classes, with two period-two points at $j=\pm4$. The right-$R$ cycles, computed by the exact map $j\mapsto1/(1-j)$ in the indicated finite fields, are
>
> | $p$ | Coset cycles for $R$ |
> |---|---|
> | $11$ | $(-5,2,-1),(-4,-2,4),(-3,3,5),(0,1,\infty)$ |
> | $17$ | $(-8,2,-1),(-7,-2,6),(-6,5,4),(-5,3,8),(-4,7,-3),(0,1,\infty)$ |
>
> Replacing the duplicated end coset by the two distinct geometric end vertices, and the upper cycle by its two geometric vertices, gives
>
> | $p$ | Complete geometric $v$-classes |
> |---|---|
> | $11$ | $\{-5,-1,2,6\},\{-4,-2,4\},\{-3,3,5\},\{0,1\}$ |
> | $17$ | $\{-8,-1,2,9\},\{-7,-2,6\},\{-6,4,5\},\{-5,3,8\},\{-4,-3,7\},\{0,1\}$ |
>
> The four-member class has two angles $\pi/3$ and two $2\pi/3$; every triple has three angles $2\pi/3$; the upper pair has two angles $\pi$. Thus every class has total angle $2\pi$, and there are no period-three points at either level. These are exhaustive orbit computations, since the stabilizer coset orbits listed exhaust the $p+1$ labels and the explicit side matrices realize all identifications. As before all induced boundary orientations reverse. The cell counts are
> $$
> V=\frac{p-1+\varepsilon_2}{2}+\frac{p+1+2\varepsilon_3}{3}+2,\qquad E=p+1,\quad F=1.
> $$
> They are $(V,E,F)=(11,12,1)$ at11 and $(17,18,1)$ at17. Both have $\chi=0$ and are connected compact orientable surfaces, hence tori. This completes the geometric process, independently agreeing with(e).

## Related Concepts

- [[07 - Modular Forms/Concepts/Modular Forms Definition|Modular Forms Definition]]
- [[07 - Modular Forms/Concepts/Modular Functions|Modular Functions]]
- [[07 - Modular Forms/Concepts/Modular Curve Charts and Cusp Widths|Modular Curve Charts and Cusp Widths]]

## Notes

- **Source status:** The complete numbered exercise was checked directly on 200 dpi page images, printed 70–71 / PDF 84–85. The solution above is independently derived.
- **Routing:** The principal toolkit is modular-forms; cross-topic prerequisites are linked above.
- **Learning status:** The status remains `not-started`.
- **Archive navigation:** [[00 - Home/Diamond-Shurman Modular Forms Exercise Archive|Diamond–Shurman Exercise Archive]].
