# -*- coding: utf-8 -*-
"""正二十面体群 / 正八面体群 题解课件内容数据。

内容全部取自本库笔记（Exercise G*** / Rep***）的题面、提示与解答，
数学记号改写为 Unicode 纯文本（PPTX 不渲染 LaTeX），原文英文题干保留为小字。
"""

G_DIR = "01 - Group Theory/Exercises"
R_DIR = "06 - Representation Theory/Exercises"

SECTIONS = [
    dict(
        num="01",
        title="对称群与群作用",
        subtitle="正十二面体、正二十面体、立方体与正四面体的对称群；轨道、稳定化子与内接多面体",
        codes=["G166", "G181", "G190", "G174", "G182", "G183", "G184", "G185", "G199"],
    ),
    dict(
        num="02",
        title="共轭类、正规子群与子群分类",
        subtitle="类方程、正规子群、中央化子与 A₄ / A₅ / S₄ / S₅ 的子群结构",
        codes=["G200", "G201", "G202", "G203", "G204", "G186"],
    ),
    dict(
        num="03",
        title="生成元、表现与三角群",
        subtitle="三角群 G(p,q,r)、反射生成元与 (2,3,4)/(2,3,5) 的球面实现",
        codes=["G254", "G255", "G256"],
    ),
    dict(
        num="04",
        title="群扩张与二重覆盖",
        subtitle="A₅ 的三种二重扩张：直积、非分裂对称扩张、二元中心扩张",
        codes=["G146", "Rep108"],
    ),
    dict(
        num="05",
        title="表示与特征标",
        subtitle="标准表示、不可约性、置换特征标、O 与 I 的特征标表、外共轭与限制",
        codes=[
            "Rep49", "Rep50", "Rep55", "Rep58", "Rep79", "Rep80",
            "Rep82", "Rep83", "Rep84", "Rep85", "Rep136",
        ],
    ),
]

# 每题：code, sec, title, source, diff, orig, zh[], hints[], steps[], concl, note, extra(可选)
PROBLEMS = [
    # ---------------- §1 对称群与群作用 ----------------
    dict(
        code="G166", sec=1, title="正十二面体的全对称群", diff="入门",
        source="Artin《Algebra》2e, Ch. 6, §9, Ex. 9.3 · 印刷 p.191 / PDF p.203",
        note=f"{G_DIR}/Exercise G166 - Full Symmetry Group of the Dodecahedron.md",
        orig="Determine the order of the group of symmetries of a dodecahedron, when "
             "orientation-reversing symmetries such as reflections in planes are allowed.",
        zh=["求正十二面体的对称群的阶，其中允许反射等改变定向的对称。"],
        hints=["全对称群在 12 个面上传递。",
               "固定一个正五边形面后，它的集合稳定化子是 10 阶二面体群 D₅。"],
        steps=[
            "全对称群在 12 个面上传递：任意两个面都能被某个对称互相送到。",
            "固定一个面后，这个正五边形自身的每个对称（D₅，阶 10）都唯一地延拓为整个正十二面体的对称。",
            "由轨道–稳定化子：|G| = |轨道| × |稳定化子| = 12 × 10 = 120。",
            "等价说法：保向旋转子群阶为 60，中心反演 −id 给出另一个陪集，故全群是旋转子群与 {±id} 的直积。",
        ],
        concl="|Sym(正十二面体)| = 12 × 10 = 120。全群 ≅ A₅ × C₂（本题只用到阶）。",
    ),
    dict(
        code="G181", sec=1, title="对偶多面体的对称群同构", diff="入门",
        source="Artin《Algebra》2e, Ch. 6, §12, Ex. 12.1 · 印刷 p.192 / PDF p.204",
        note=f"{G_DIR}/Exercise G181 - Dual Polyhedra Have Isomorphic Symmetry Groups.md",
        orig="Explain why the groups of symmetries of the dodecahedron and the icosahedron are isomorphic.",
        zh=["解释为什么正十二面体与正二十面体的对称群同构。"],
        hints=["十二面体与二十面体互为对偶：一个的面心是另一个的顶点。",
               "对称保持关联关系，因此自动作用在对偶多面体上。"],
        steps=[
            "把正十二面体放在原点，沿每个面的面心方向取一点，其凸包正是正二十面体。",
            "每个正交对称置换十二面体的面，从而置换这些面心，于是诱导出对偶二十面体的一个对称，得到同态 Sym(十二面体) → Sym(二十面体)。",
            "对偶构造可逆：对二十面体取面心凸包回到十二面体，两个方向的同态互逆，因此是同构。",
            "同一论证给出旋转子群的同构，并保持定向对称与反向对称的区分。",
        ],
        concl="Sym(正十二面体) ≅ Sym(正二十面体)，旋转子群亦然。",
    ),
    dict(
        code="G190", sec=1, title="n 维超立方体的对称群", diff="进阶",
        source="Artin《Algebra》2e, Ch. 6, 杂题 M.4 · 印刷 p.193 / PDF p.205",
        note=f"{G_DIR}/Exercise G190 - Symmetry Group of the n-Dimensional Hypercube.md",
        orig="Let C_n = {x in R^n : -1 <= x_i <= 1} and let G_n <= O_n be its full symmetry "
             "group. (a) Use the counting formula and induction to determine |G_n|. "
             "(b) Describe G_n explicitly, identify the stabilizer of (1,...,1), and check that G_2 = D_4.",
        zh=["设 Cₙ = {x ∈ ℝⁿ : −1 ≤ xᵢ ≤ 1}，Gₙ ≤ Oₙ 是它的全对称群。",
            "(a) 用计数公式与归纳确定 |Gₙ|。",
            "(b) 显式描述 Gₙ，求 (1,…,1) 的稳定化子，并验证 G₂ ≅ D₄。"],
        hints=["对称置换 2n 个面，并保持 n 对对径面。",
               "这些矩阵恰好是带符号的置换矩阵。"],
        steps=[
            "每个带符号置换矩阵都保持 Cₙ；反之，正交对称置换 n 对对径面，从而置换单位法向量 {±eᵢ}，所以它正是带符号置换矩阵。",
            "因此 Gₙ 是 C₂ⁿ 与 Sₙ 的半直积（等价地：C₂ 的 n 重圈积与 Sₙ），且 |Gₙ| = 2ⁿ·n!。",
            "归纳做法：作用于 2n 个面；固定一个面的子群在该面上表现为 Gₙ₋₁，故 |Gₙ| = 2n·|Gₙ₋₁|。",
            "带符号置换矩阵固定 (1,…,1) 当且仅当所有符号为正，故稳定化子是置换矩阵子群 Sₙ（阶 n!）；轨道–稳定化子给出 2ⁿ 个顶点，与之相符。",
            "n = 2 时 G₂ 恰是 8 个带符号置换矩阵，即正方形的全对称群，故 G₂ ≅ D₄。",
        ],
        concl="Gₙ 是 C₂ⁿ 与 Sₙ 的半直积，|Gₙ| = 2ⁿn!；Stab(1,…,1) ≅ Sₙ；G₂ ≅ D₄。",
    ),
    dict(
        code="G174", sec=1, title="正四面体群在两点集上的作用", diff="入门",
        source="Artin《Algebra》2e, Ch. 6, §11, Ex. 11.2 · 印刷 p.192 / PDF p.204",
        note=f"{G_DIR}/Exercise G174 - Actions of the Tetrahedral Group on Two Points.md",
        orig="Describe all ways in which the tetrahedral group T can operate on a set of two elements.",
        zh=["描述正四面体群 T 在二元集合上的一切作用方式。"],
        hints=["T ≅ A₄。",
               "非平凡的二点作用会给出满同态 A₄ → C₂，从而给出指数 2 的正规子群。"],
        steps=[
            "在两点集上的作用等价于同态 T ≅ A₄ → S₂ ≅ C₂。",
            "若该同态非平凡，则其核是 A₄ 的 6 阶正规子群。",
            "但 A₄ 没有 6 阶子群：由 Lagrange 与类方程 12 = 1+3+4+4，含单位元的共轭类之并凑不出 6。",
            "所以一切同态 A₄ → C₂ 都平凡：唯一作用是固定两点的平凡作用。",
        ],
        concl="只有平凡作用（两点都不动）。等价地，A₄ 的交换化是 C₃，没有 2 阶商。",
    ),
    dict(
        code="G182", sec=1, title="正八面体旋转群的极点轨道", diff="中级",
        source="Artin《Algebra》2e, Ch. 6, §12, Ex. 12.2 · 印刷 p.193 / PDF p.205",
        note=f"{G_DIR}/Exercise G182 - Pole Orbits of the Octahedral Rotation Group.md",
        orig="Describe the orbits of poles for the group of rotations of an octahedron.",
        zh=["描述正八面体旋转群的极点轨道。"],
        hints=["极点是（非平凡）旋转轴与单位球面的交点。",
               "按轴穿过对顶点、对面心、对棱中点分成三类。"],
        steps=[
            "正八面体旋转群 O 的阶为 24，极点按几何类型分成三类。",
            "过一对顶点的 6 个方向，稳定化子阶 4；过一对面心的 8 个方向，稳定化子阶 3；过一对棱中点的 12 个方向，稳定化子阶 2。",
            "旋转保持类型，且在每一类上传递；用轨道–稳定化子核对：24/4 = 6，24/3 = 8，24/2 = 12。",
            "故极点集恰是三个轨道之并，大小分别为 6、8、12。",
        ],
        concl="极点 = 三个轨道，大小 6 + 8 + 12 = 26；对应 Artin 有限旋转群分类中的 (rᵢ, nᵢ) = (4,6), (3,8), (2,12)。",
    ),
    dict(
        code="G183", sec=1, title="立方体体对角线的稳定化子", diff="入门",
        source="Artin《Algebra》2e, Ch. 6, §12, Ex. 12.3 · 印刷 p.193 / PDF p.205",
        note=f"{G_DIR}/Exercise G183 - Stabilizer of a Cube Body Diagonal.md",
        orig="Let O be the group of rotations of a cube, and let S be the set of four diagonal "
             "lines connecting opposite vertices. Determine the stabilizer of one of the diagonals.",
        zh=["设 O 是立方体的旋转群，S 是连接对顶点的四条体对角线之集，求其中一条对角线的稳定化子。"],
        hints=["24 阶群在四条体对角线之集上传递。",
               "除绕该对角线的旋转外，还有交换其两个端点的半转。"],
        steps=[
            "轨道大小是 4，因此稳定化子的阶为 24/4 = 6。",
            "它含绕该对角线的循环群 C₃（旋转 0°、120°、240°）。",
            "还含三条垂直于该对角线的半转：它们交换对角线两端，并把 120° 旋转共轭为其逆。",
            "于是稳定化子 ≅ D₃ ≅ S₃。",
        ],
        concl="Stab_O(体对角线) ≅ D₃ ≅ S₃。若固定的是端点而非直线，则只有 C₃。",
    ),
    dict(
        code="G184", sec=1, title="保持内接正四面体的旋转", diff="中级",
        source="Artin《Algebra》2e, Ch. 6, §12, Ex. 12.4 · 印刷 p.193 / PDF p.205",
        note=f"{G_DIR}/Exercise G184 - Rotations Preserving an Inscribed Tetrahedron.md",
        orig="Let G = O be the group of rotations of a cube, and let H be the subgroup carrying "
             "one of the two inscribed tetrahedra to itself. Prove that H = T.",
        zh=["设 G = O 是立方体的旋转群，H 是把两个内接正四面体之一映到自身的子群，证明 H = T。"],
        hints=["两个正四面体由立方体顶点的两个奇偶类构成。",
               "O 在两个正四面体之间传递，故 H 的指数为 2。"],
        steps=[
            "8 个立方体顶点分成两个正四面体；四分之一转把它们互换，故 O 在这个二元集上的作用是传递的。",
            "一个正四面体的稳定化子 H 指数为 2，故 |H| = |O|/2 = 12。",
            "所选正四面体的每个旋转对称同时是立方体旋转，故正四面体旋转群 T ≤ H。",
            "|T| = 12 = |H|，包含关系加阶相等给出 H = T。",
        ],
        concl="H = T ≅ A₄，即 O ≅ S₄ 中唯一的指数 2 子群。",
    ),
    dict(
        code="G185", sec=1, title="正二十面体群的 10 阶子群", diff="入门",
        source="Artin《Algebra》2e, Ch. 6, §12, Ex. 12.5 · 印刷 p.193 / PDF p.205",
        note=f"{G_DIR}/Exercise G185 - An Order-Ten Subgroup of the Icosahedral Group.md",
        orig="Prove that the icosahedral group has a subgroup of order 10.",
        zh=["证明正二十面体群有 10 阶子群。"],
        hints=["固定一条五次轴上的一对对径顶点（作为无序对）。",
               "其集合稳定化子含绕轴的 5 个旋转，以及交换两端的 5 个半转。"],
        steps=[
            "取过正二十面体一对对径顶点 {v, −v} 的轴，绕该轴的旋转组成循环群 C₅。",
            "另有 5 个垂直于该轴的半转，它们保持这对无序顶点，并把 C₅ 的生成元 r 共轭为 r⁻¹。",
            "因此集合稳定化子的表现为 ⟨r, s : r⁵ = s² = 1, srs = r⁻¹⟩ ≅ D₅。",
            "于是得到 10 阶子群 D₅。",
        ],
        concl="I 含 10 阶子群 D₅。注意：点 v 的稳定化子只有 C₅，改用无序对才翻倍成 D₅。",
    ),
    dict(
        code="G199", sec=1, title="内接立方体的稳定化子", diff="入门",
        source="Artin《Algebra》2e, Ch. 7, §4, Ex. 4.1 · 印刷 p.222 / PDF p.234",
        note=f"{G_DIR}/Exercise G199 - Stabilizer of an Inscribed Cube.md",
        orig="The icosahedral group operates on the set of five inscribed cubes in the dodecahedron. "
             "Determine the stabilizer of one of the cubes.",
        zh=["正二十面体群作用在正十二面体内 5 个内接立方体的集合上，求其中一个立方体的稳定化子。"],
        hints=["用轨道–稳定化子，并识别同时保持正十二面体与立方体的旋转。",
               "这些旋转按该立方体四条体对角线的偶置换作用。"],
        steps=[
            "保向正二十面体群 I 的阶为 60，它在这 5 个内接立方体上传递。",
            "故一个立方体的稳定化子阶为 60/5 = 12。",
            "这些元素按该立方体四条体对角线的偶置换作用；几何上它们正是保持该立方体两个内接正四面体之一的旋转。",
            "因此稳定化子同构于正四面体旋转群 T ≅ A₄。",
        ],
        concl="Stab_I(内接立方体) ≅ T ≅ A₄（阶 12）。",
    ),

    # ---------------- §2 共轭类、正规子群与子群分类 ----------------
    dict(
        code="G200", sec=2, title="S₅ 的真正规子群", diff="中级",
        source="Artin《Algebra》2e, Ch. 7, §4, Ex. 4.2 · 印刷 p.222 / PDF p.234",
        note=f"{G_DIR}/Exercise G200 - Proper Normal Subgroups of $S_5$.md",
        orig="Is A_5 the only proper normal subgroup of S_5?",
        zh=["A₅ 是 S₅ 的唯一真正规子群吗？",
            "（原书用词提示：proper 字面上包含平凡子群；本库笔记保留该措辞歧义并分别作答。）"],
        hints=["先与 A₅ 求交，再用 A₅ 的单性。"],
        steps=[
            "先看字面：平凡子群 1 既正规又真，所以按字面答案是“否”。",
            "通常意图读法是“非平凡的真正规子群”，此时答案是“是”。",
            "设 N 是 S₅ 的非平凡正规子群，则 N ∩ A₅ 是 A₅ 的正规子群；由 A₅ 单，交集为 1 或 A₅。",
            "若交集为 A₅，则 A₅ ⊆ N，于是 N = A₅ 或 S₅。",
            "若交集为 1，则符号映射限制在 N 上单射，故 |N| ≤ 2；2 阶正规子群会中心化，而 Z(S₅) = 1，故 N = 1。",
            "综上，正规子群只有 1、A₅、S₅。",
        ],
        concl="按“非平凡真”读法：A₅ 是唯一真正规子群。注意：原书 proper 含平凡子群，字面答案为否（笔记已标 Source wording）。",
    ),
    dict(
        code="G201", sec=2, title="正二十面体群中对合的中央化子", diff="入门",
        source="Artin《Algebra》2e, Ch. 7, §4, Ex. 4.3 · 印刷 p.222 / PDF p.234",
        note=f"{G_DIR}/Exercise G201 - Centralizer of an Involution in the Icosahedral Group.md",
        orig="What is the centralizer of an element of order 2 of the icosahedral group I?",
        zh=["正二十面体群 I 的 2 阶元素的中央化子是什么？"],
        hints=["用由 15 个半转构成的单个共轭类。"],
        steps=[
            "I ≅ A₅ 有 15 个 2 阶元素（双对换），它们彼此共轭。",
            "故对合 x 的中央化子阶为 60/15 = 4。",
            "该中央化子由单位元、x 以及绕同一内接矩形构型的另外两条垂直轴的半转组成，是 Klein 四元群。",
        ],
        concl="Z_I(x) ≅ C₂ × C₂（阶 4）。",
    ),
    dict(
        code="G202", sec=2, title="正四面体群的类方程", diff="中级",
        source="Artin《Algebra》2e, Ch. 7, §4, Ex. 4.4 · 印刷 p.222 / PDF p.234",
        note=f"{G_DIR}/Exercise G202 - Class Equation of the Tetrahedral Group.md",
        orig="(a) Determine the class equation of the tetrahedral group T. (b) Prove that T has a "
             "normal subgroup of order 4, and no subgroup of order 6.",
        zh=["(a) 求正四面体群 T 的类方程。",
            "(b) 证明 T 有 4 阶正规子群，且没有 6 阶子群。"],
        hints=["把 T 认作 A₄；8 个 3-轮换分成两类。"],
        steps=[
            "在 T ≅ A₄ 中：单位元自成一类；3 个半转（双对换）成一类；8 个 3 阶旋转分成两类，各 4 个——一个旋转与它的逆在 A₄ 中不共轭。",
            "故类方程 12 = 1 + 3 + 4 + 4。",
            "单位元与三个半转构成 Klein 四元群 V₄；它是若干共轭类之并，因此正规。",
            "(b) 6 阶子群指数为 2，必正规；但含单位元的共轭类之并凑不出 6（1+3 = 4，1+4 = 5，1+3+4 = 8，…），故不存在。",
        ],
        concl="类方程 12 = 1+3+4+4；V₄ 是 T 的正规子群；T 无 6 阶子群。",
    ),
    dict(
        code="G203", sec=2, title="正八面体群的类方程与正规子群", diff="进阶",
        source="Artin《Algebra》2e, Ch. 7, §4, Ex. 4.5 · 印刷 p.223 / PDF p.235",
        note=f"{G_DIR}/Exercise G203 - Class Equation and Normal Subgroups of the Octahedral Group.md",
        orig="(a) Determine the class equation of the octahedral group O. (b) This group contains two "
             "proper normal subgroups. Find them, show that they are normal, and show that there are no others.",
        zh=["(a) 求正八面体群 O 的类方程。",
            "(b) 它含两个真正规子群：找出它们、证明它们正规，并证明没有别的。"],
        hints=["用 O ≅ S₄ 在立方体四条体对角线上的作用。"],
        steps=[
            "经由 O ≅ S₄，共轭类按轮换型分类，类大小为 1, 6, 3, 8, 6，对应型 1, (12), (12)(34), (123), (1234)。",
            "故类方程 24 = 1 + 6 + 3 + 8 + 6。",
            "交错子群 A₄（阶 12）是符号映射的核，故正规；V₄ = {1, (12)(34), (13)(24), (14)(23)} 是单位元类与双对换类之并，也正规。",
            "反之，正规子群必是含单位元的共轭类之并，其阶整除 24；在 1,6,3,8,6 中检查，唯一可能的真非平凡和是 1+3 = 4 与 1+3+8 = 12。",
        ],
        concl="24 = 1+6+3+8+6；真非平凡正规子群恰为 V₄（阶 4）与 A₄（阶 12）。",
    ),
    dict(
        code="G204", sec=2, title="正四面体群与正八面体群即 A₄ 与 S₄", diff="中级",
        source="Artin《Algebra》2e, Ch. 7, §4, Ex. 4.6 · 印刷 p.223 / PDF p.235",
        note=f"{G_DIR}/Exercise G204 - Tetrahedral and Octahedral Groups as A4 and S4.md",
        orig="(a) Prove that the tetrahedral group T is isomorphic to A_4, and that the octahedral "
             "group O is isomorphic to S_4. (b) Two tetrahedra can be inscribed into a cube C, each "
             "one using half the vertices. Relate this to the inclusion A_4 in S_4.",
        zh=["(a) 证明正四面体群 T ≅ A₄，正八面体群 O ≅ S₄。",
            "(b) 一个立方体内可内接两个正四面体，各用一半顶点；说明这与 A₄ ⊂ S₄ 的关系。"],
        hints=["让群作用在四个顶点或四条体对角线上。"],
        steps=[
            "T 在正四面体的 4 个顶点上忠实作用，给出单射 T → S₄；所有旋转都诱导偶置换，且 |T| = 12 = |A₄|，故 T ≅ A₄。",
            "O 在立方体的 4 条体对角线上忠实作用，|O| = 24 = |S₄|，故 O ≅ S₄。",
            "(b) 两个内接正四面体恰被体对角线上的奇置换交换、被偶置换分别保持。",
            "因此任一正四面体的稳定化子就是指数 2 的子群 A₄ ⊂ S₄，几何地实现了 T ⊂ O。",
        ],
        concl="T ≅ A₄，O ≅ S₄，[S₄ : A₄] = 2；两个内接正四面体正对应这条指数 2 包含。",
    ),
    dict(
        code="G186", sec=2, title="正四面体群与正二十面体群的子群", diff="进阶",
        source="Artin《Algebra》2e, Ch. 6, §12, Ex. 12.6 · 印刷 p.193 / PDF p.205",
        note=f"{G_DIR}/Exercise G186 - Subgroups of the Tetrahedral and Icosahedral Groups.md",
        orig="Determine all subgroups of (a) the tetrahedral group, (b) the icosahedral group.",
        zh=["求 (a) 正四面体群、(b) 正二十面体群的所有子群。"],
        hints=["用 T ≅ A₄、I ≅ A₅，按元素阶与 Sylow 子群分类。",
               "对 A₅ 还要算上 C₃ 与 C₅ 的正规化子、点稳定化子 A₄ 和 Klein 四元群。"],
        steps=[
            "(a) T ≅ A₄ 的子群型：{1}, C₂, C₃, V₄, A₄；其中 C₂ 有 3 个、C₃ 有 4 个、V₄ 唯一。由 Lagrange 与“无 6 阶子群”即得完备。",
            "(b) I ≅ A₅ 的子群型：{1}, C₂, C₃, C₅, V₄, D₃, D₅, A₄, A₅。",
            "它们都实际出现：循环群由旋转生成；V₄ 是某个内接正四面体对应的三个半转；D₃、D₅ 分别是三重、五重轴的正规化子；A₄ 稳定一个内接正四面体（等价于自然五点模型中一点的稳定化子）。",
            "完备性：设 H < A₅，则 |H| 整除 60。用 H 内的 Sylow 计数以及 A₅ 只有 1,2,3,5 阶元素，排除 15、20、30 等；若 |H| 含两个不同奇素因子，Sylow 计数逼迫 H = A₅；只含一个奇素因子时，其正规化子把 H 放入 D₃、D₅ 或 A₄；纯 2-子群只有 C₂ 与 V₄。",
        ],
        concl="T 有 5 型子群，I 有 9 型子群（“所有子群”按同构/共轭型计）。",
    ),

    # ---------------- §3 生成元、表现与三角群 ----------------
    dict(
        code="G254", sec=3, title="有限球面三角群", diff="进阶",
        source="Artin《Algebra》2e, Ch. 7, §11, Ex. 11.6 · 印刷 p.226 / PDF p.238",
        note=f"{G_DIR}/Exercise G254 - Finite Spherical Triangle Groups.md",
        orig="For G^{pqr} = <x,y,z : x^p = y^q = z^r = xyz = 1>, prove the cases (2,2,n), (2,3,4), "
             "(2,3,5) are respectively D_n, the octahedral group, and the icosahedral group.",
        zh=["对三角群 G(p,q,r) = ⟨x, y, z : xᵖ = y^q = z^r = xyz = 1⟩，证明 (2,2,n)、(2,3,4)、(2,3,5) "
            "三种情形分别是 Dₙ、正八面体群、正二十面体群。"],
        hints=["消去 z，再与球面三角形的顶点旋转比较。"],
        steps=[
            "消去 z = (xy)⁻¹，得到 ⟨x, y : xᵖ = y^q = (xy)^r = 1⟩。",
            "(2,2,n) 就是标准的二面体表现。",
            "(2,3,4) 与 (2,3,5)：取内角为 π/2, π/3, π/4 与 π/2, π/3, π/5 的球面三角形，绕其顶点的旋转给出到正八面体、正二十面体旋转群的满射。",
            "Todd–Coxeter 枚举给出阶的上界 24 与 60；几何像的阶恰好相同，故这些满射是同构。",
        ],
        concl="G(2,2,n) ≅ Dₙ，G(2,3,4) ≅ O，G(2,3,5) ≅ I。",
    ),
    dict(
        code="G255", sec=3, title="等边三角形的反射生成三角群", diff="进阶",
        source="Artin《Algebra》2e, Ch. 7, §11, Ex. 11.7 · 印刷 p.226 / PDF p.238",
        note=f"{G_DIR}/Exercise G255 - Reflections in an Equilateral Triangle Generate a Triangle Group.md",
        orig="Let a,b,c be reflections in the three sides of an equilateral triangle and set x = ab, "
             "y = bc, z = ca. Prove x,y,z generate a triangle group.",
        zh=["设 a, b, c 是等边三角形三边上的反射，令 x = ab, y = bc, z = ca，证明 x, y, z 生成一个三角群。"],
        hints=["夹角 60° 的两条直线上的反射之积是 3 阶旋转。"],
        steps=[
            "x, y, z 各是 120° 旋转，故 x³ = y³ = z³ = 1。",
            "又 xyz = (ab)(bc)(ca) = ab²c²a = a² = 1（用到 b² = c² = 1 与 a² = 1）。",
            "因此生成群是三角群 G(3,3,3) 的商。",
            "反过来，这三个旋转正是该表现所要求的生成元，故它们确实实现 G(3,3,3)，即三角格点对称群的保向部分。",
        ],
        concl="⟨x, y, z⟩ 实现三角群 G(3,3,3)（欧氏三角格）。",
    ),
    dict(
        code="G256", sec=3, title="正二十面体的三角表现与两个陪集作用", diff="进阶",
        source="Artin《Algebra》2e, Ch. 7, §11, Ex. 11.8 · 印刷 pp.226–227 / PDF pp.238–239",
        note=f"{G_DIR}/Exercise G256 - The Icosahedral Triangle Presentation and Two Coset Actions.md",
        orig="For G = <x,y,z : x^2 = y^3 = z^5 = xyz = 1>: (a) prove |G| = 60; (b) analyze "
             "H = <x, z y z^{-1}>; (c) prove G = A_5; (d) analyze K = <x, yxz>.",
        zh=["设 G = ⟨x, y, z : x² = y³ = z⁵ = xyz = 1⟩：",
            "(a) 证明 |G| = 60；(b) 分析 H = ⟨x, zyz⁻¹⟩；(c) 证明 G ≅ A₅；(d) 分析 K = ⟨x, yxz⟩。"],
        hints=["对 H 与 K 用 Todd–Coxeter 枚举，再与 A₅ 的五点作用比较。"],
        steps=[
            "Todd–Coxeter 给出 [G:H] = 5、|H| = 12，故 |G| = 60，且 H ≅ A₄。",
            "在 G/H 的一种陪集编号下：x = (15)(34)，y = (235)，z = (15432)。",
            "这些偶置换生成 A₅；由于两群阶均为 60，故 G ≅ A₅。",
            "对 K 枚举得 [G:K] = 6、|K| = 10，故 K ≅ D₅；一个相容的六点陪集表示为 x = (14)(56)，y = (156)(234)，z = (15432)，第六个点被 z 固定。",
            "这些陪集表同时独立于几何三角群模型地给出 (a)。",
        ],
        concl="G ≅ A₅；H ≅ A₄（指数 5）；K ≅ D₅（指数 6）。",
    ),

    # ---------------- §4 群扩张与二重覆盖 ----------------
    dict(
        code="G146", sec=4, title="正二十面体群的三种扩张", diff="进阶",
        source="Artin《Algebra》2e, Ch. 9, 杂题 M.9 · 印刷 p.288 / PDF p.300",
        note=f"{G_DIR}/Exercise G146 - Three Extensions of the Icosahedral Group.md",
        orig="The icosahedral group is a subgroup of index 2 in the group G_1 of all symmetries of a "
             "dodecahedron ... A_5 has index 2 in G_2 = S_5. Let G_3 be the inverse image of the "
             "icosahedral group under the spin homomorphism SU_2 -> SO_3. Are any G_i isomorphic?",
        zh=["正二十面体群在正十二面体全对称群 G₁ 中指数为 2；A₅ 在 G₂ = S₅ 中指数为 2；",
            "又设 φ : SU₂ → SO₃ 为自旋同态，G₃ = φ⁻¹(I)。这些 Gᵢ 中有同构的吗？"],
        hints=["三者阶都是 120；重点比较中心与 2 阶元素。"],
        steps=[
            "保向正二十面体群是 A₅（阶 60），故每个 Gᵢ 的阶都是 120。",
            "中心反演与所有正十二面体对称交换，并且分裂定向特征，于是 G₁ ≅ A₅ × C₂，Z(G₁) ≅ C₂。",
            "Z(G₂) = Z(S₅) = 1，故 G₁ ≇ G₂。",
            "G₃ 是二元二十面体群，中心为 {±I}，故 G₃ ≇ S₅。",
            "G₃ ≇ A₅ × C₂：SU₂ 中唯一的 2 阶元是 −I（单位四元数满足 q² = 1 只能有 q = ±1），而 A₅ × C₂ 有许多非中心对合。",
        ],
        concl="G₁、G₂、G₃ 两两不同构——A₅ 的三种二重扩张：直积、非分裂对称扩张、二元中心扩张。",
    ),
    dict(
        code="Rep108", sec=4, title="单群没有非平凡二维表示", diff="进阶",
        source="Artin《Algebra》2e, Ch. 10, 杂题 M.8 · 印刷 p.321 / PDF p.333",
        note=f"{R_DIR}/Exercise Rep108 - Simple Groups Have No Nontrivial Two-Dimensional Representations.md",
        orig="Prove that a finite simple group that is not of prime order has no nontrivial "
             "representation of dimension 2.",
        zh=["证明：非素数阶的有限单群没有非平凡的二维表示。"],
        hints=["单群的非平凡表示必忠实；再与 SL₂(ℂ) 的有限子群分类比较。"],
        steps=[
            "设 G 有限单且非循环。非平凡同态 ρ : G → GL₂(ℂ) 的核正规，由单性必为 1，故 ρ 忠实。",
            "det ρ 是一维特征标；单性与非交换性迫使它平凡，故 ρ(G) ≤ SL₂(ℂ)。",
            "SL₂(ℂ) 的有限子群分类给出：循环群，以及二元二面体、二元正四面体、二元正八面体、二元正二十面体群。",
            "该列表中一切非循环群都含中心元 −I；而中心平凡的非交换单群 G 的忠实像不可能是它们，矛盾。",
        ],
        concl="不存在这样的二维表示。注意：用到 SL₂(ℂ) 有限子群分类（笔记明确标注为外部标准结论，未证明）。",
    ),

    # ---------------- §5 表示与特征标 ----------------
    dict(
        code="Rep49", sec=5, title="O 与 Dₙ 的标准表示", diff="入门",
        source="Artin《Algebra》2e, Ch. 10, §1, Ex. 1.2 · 印刷 p.314 / PDF p.326",
        note=f"{R_DIR}/Exercise Rep49 - Standard Representations of O and Dn.md",
        orig="(a) Choose a suitable basis for R^3 and write the standard representation of the "
             "octahedral group O explicitly. (b) Do the same for the dihedral group D_n.",
        zh=["(a) 为 ℝ³ 选取合适的基，写出正八面体群 O 的标准表示。",
            "(b) 对二面体群 Dₙ 做同样的事。"],
        hints=["对 O，取穿过立方体一对对面的坐标轴。",
               "对 Dₙ，用一次旋转与一次反射生成。"],
        steps=[
            "(a) 把立方体放在原点，使面垂直于坐标轴。保向对称置换三条坐标轴，并按与行列式相容的方式改变符号；于是标准表示把 O 等同于行列式为 1 的带符号置换矩阵。",
            "例如它由 A（绕 z 轴的四分之一转）与 B（绕对角线 (1,1,1) 的三分之一转）生成。",
            "(b) 把正 n 边形放在欧氏平面，取 θ = 2π/n，令 R 为转角 θ 的旋转矩阵，S = diag(1, −1)。",
            "则 Rⁿ = S² = I 且 SRS = R⁻¹，故 r ↦ R、s ↦ S 给出 Dₙ 的标准二维表示。",
        ],
        concl="O 同构于 {行列式 1 的带符号置换矩阵}；Dₙ 由 R、S 给出标准二维表示。",
    ),
    dict(
        code="Rep50", sec=5, title="正四面体标准表示不可约", diff="中级",
        source="Artin《Algebra》2e, Ch. 10, §2, Ex. 2.1 · 印刷 p.314 / PDF p.326",
        note=f"{R_DIR}/Exercise Rep50 - Irreducibility of the Tetrahedral Representation.md",
        orig="Prove that the standard three-dimensional representation of the tetrahedral group T is "
             "irreducible as a complex representation.",
        zh=["证明正四面体群 T 的标准三维表示作为复表示是不可约的。"],
        hints=["先算转角 0、π、±2π/3 的迹。",
               "再看特征标的范数是否为 1。"],
        steps=[
            "旋转正四面体群的共轭类大小为 1, 3, 4, 4：单位元、3 个半转，以及两类各 4 个的三分之一转。",
            "在标准表示中，转角 θ 的旋转迹为 1 + 2cos θ，故特征标为 χ = (3, −1, 0, 0)。",
            "Hermite 范数 (χ, χ) = [1·3² + 3·(−1)² + 4·0² + 4·0²]/12 = 1。",
            "复特征标范数为 1 当且仅当表示不可约。",
        ],
        concl="T 的标准复三维表示不可约。",
    ),
    dict(
        code="Rep55", sec=5, title="具有低维实表示的有限群", diff="进阶",
        source="Artin《Algebra》2e, Ch. 10, §3, Ex. 3.3 · 印刷 p.315 / PDF p.327",
        note=f"{R_DIR}/Exercise Rep55 - Finite Groups with Low-Dimensional Real Representations.md",
        orig="(a) Let R: G -> SL_2(R) be a faithful representation of a finite group by real 2x2 "
             "matrices with determinant 1. Prove that G is cyclic. (b) Determine the finite groups "
             "with faithful real 2-dimensional representations. (c) ... determinant 1 in dimension 3.",
        zh=["(a) 设 R : G → SL₂(ℝ) 是有限群的忠实实二维表示（行列式为 1），用它证明 G 是循环群。",
            "(b) 求具有忠实二维实表示的有限群。",
            "(c) 求具有行列式为 1 的忠实三维实表示的有限群。"],
        hints=["把像共轭进 O₂ 或 SO₃。",
               "用 O₂ 与 SO₃ 的有限子群分类。"],
        steps=[
            "(a) 有限像可共轭进 O₂；行列式为 1 使它落在 SO₂（圆群）中。圆群的有限子群是某个 n 的 n 次单位根群，因而循环；忠实性把 G 与这个像等同。",
            "(b) O₂ 的有限子群只有循环群（旋转）与二面体群（旋转加反射），两者都有忠实的平面作用，故答案是 Cₙ 与 Dₙ。",
            "(c) 正交化后像落在 SO₃。SO₃ 的有限子群是循环群、二面体旋转群，以及正四面体、立方体/正八面体、正十二面体/正二十面体的旋转群，抽象地即 Cₙ、Dₙ、A₄、S₄、A₅。",
            "上述每个群都有标准的忠实旋转表示，故列表完整。",
        ],
        concl="(b) Cₙ 与 Dₙ；(c) Cₙ, Dₙ, A₄, S₄, A₅。注意：用到 O₂ 与 SO₃ 有限子群分类（笔记标注为外部标准输入）。",
    ),
    dict(
        code="Rep58", sec=5, title="不可约表示的维数", diff="中级",
        source="Artin《Algebra》2e, Ch. 10, §4, Ex. 4.1 · 印刷 p.315 / PDF p.327",
        note=f"{R_DIR}/Exercise Rep58 - Dimensions of Irreducible Representations.md",
        orig="Find the dimensions of the irreducible representations of the octahedral group, the "
             "quaternion group, and the dihedral groups D_4, D_5, and D_6.",
        zh=["求正八面体群、四元数群 Q₈，以及二面体群 D₄、D₅、D₆ 的不可约表示的维数。"],
        hints=["数共轭类个数，并用 Σdᵢ² = |G|。"],
        steps=[
            "正八面体群 ≅ S₄：阶 24、5 个共轭类、交换化为 C₂，故有两个一维表示；其余平方和为 24 − 2 = 22 = 4 + 9 + 9，维数为 1, 1, 2, 3, 3。",
            "Q₈ 与 D₄：阶 8、5 个类、交换化 C₂²，故各为 1, 1, 1, 1, 2。",
            "D₅：阶 10、4 个类、两个一维特征标，剩 10 − 2 = 8 = 2² + 2²，故为 1, 1, 2, 2。",
            "D₆：阶 12、6 个类、交换化 C₂²，剩余 12 − 4 = 8 = 2² + 2²，故为 1, 1, 1, 1, 2, 2。",
        ],
        concl="O：1,1,2,3,3；Q₈ 与 D₄：1,1,1,1,2；D₅：1,1,2,2；D₆：1,1,1,1,2,2。",
    ),
    dict(
        code="Rep79", sec=5, title="正四面体在棱上的作用", diff="中级",
        source="Artin《Algebra》2e, Ch. 10, §6, Ex. 6.3 · 印刷 p.318 / PDF p.330",
        note=f"{R_DIR}/Exercise Rep79 - Tetrahedral Action on Edges.md",
        orig="Let chi^e denote the character of the representation of the tetrahedral group T on the "
             "six edges of the tetrahedron. Decompose this character into irreducible characters.",
        zh=["设 χᵉ 是正四面体群 T 在正四面体 6 条棱上的表示的特征标，把它分解为不可约特征标之直和。"],
        hints=["数单位元、半转、三分之一转下不动的棱数。"],
        steps=[
            "在 T ≅ A₄ 的四个共轭类（大小 1, 3, 4, 4）上，不动棱数为 χᵉ = (6, 2, 0, 0)。",
            "三个一维特征标在半转类上都取值 1，三维特征标为 (3, −1, 0, 0)。",
            "逐项作内积可知每个都恰好出现一次：χᵉ = 1 ⊕ λ ⊕ λ² ⊕ τ₃。",
            "维数核对：1 + 1 + 1 + 3 = 6。",
        ],
        concl="ℂ[棱] = 1 ⊕ λ ⊕ λ² ⊕ τ₃。",
    ),
    dict(
        code="Rep80", sec=5, title="正八面体群的特征标表与置换作用", diff="进阶",
        source="Artin《Algebra》2e, Ch. 10, §6, Ex. 6.4 · 印刷 p.318 / PDF p.330",
        note=f"{R_DIR}/Exercise Rep80 - Character Table and Permutation Actions of the Octahedral Group.md",
        orig="(a) Identify the five conjugacy classes in the octahedral group O, and find the orders "
             "of its irreducible representations. (b) Decompose the permutation characters for its "
             "actions on the six faces, three pairs of opposite faces, eight vertices, four pairs of "
             "opposite vertices, six pairs of opposite edges, and two inscribed tetrahedra. "
             "(c) Compute the character table for O.",
        zh=["(a) 找出正八面体群 O 的五个共轭类，并求其不可约表示的维数。",
            "(b) 分解它在下列集合上的置换特征标：立方体 6 个面、3 对对径面、8 个顶点、4 对对径顶点、6 对对径棱、2 个内接正四面体。",
            "(c) 计算 O 的特征标表。"],
        hints=["用 O ≅ S₄ 在立方体四条体对角线上的作用。"],
        steps=[
            "在 O ≅ S₄ 下，五个共轭类按轮换型 1, (12), (12)(34), (123), (1234)，大小为 1, 6, 3, 8, 6；不可约维数为 1, 1, 2, 3, 3。",
            "特征标表（列序同上）：1 = (1,1,1,1,1)；ε = (1,−1,1,1,−1)；τ = (2,0,2,−1,0)；σ = (3,1,−1,0,−1)；σε = (3,−1,−1,0,1)。",
            "置换特征标分解：面 = 1⊕τ⊕σε；对径面 = 1⊕τ；顶点 = 1⊕ε⊕σ⊕σε；对径顶点 = 1⊕σ；对径棱 = 1⊕τ⊕σ；内接正四面体 = 1⊕ε。",
            "用维数与特征标值逐项验证上述等式。",
        ],
        concl="六个置换分解式 + O ≅ S₄ 的完整特征标表（见参考页）。",
        extra="s4_table",
    ),
    dict(
        code="Rep82", sec=5, title="正二十面体的置换特征标", diff="进阶",
        source="Artin《Algebra》2e, Ch. 10, §6, Ex. 6.6 · 印刷 p.318 / PDF p.330",
        note=f"{R_DIR}/Exercise Rep82 - Icosahedral Permutation Characters.md",
        orig="Decompose the characters of the representations of the icosahedral group on the sets "
             "of faces, edges, and vertices into irreducible characters.",
        zh=["把正二十面体群在面、棱、顶点三个集合上的表示的特征标分解为不可约特征标。"],
        hints=["非平凡旋转固定两个面（或棱、顶点），当且仅当其轴穿过相应对象。"],
        steps=[
            "把 A₅ 的不可约特征标按次数记作 1, 3, 3′, 4, 5；类序取 1, 2, 3, 5, 5′。",
            "顶点、面、棱的不动点数分别为 (12, 0, 0, 2, 2)、(20, 0, 2, 0, 0)、(30, 2, 0, 0, 0)。",
            "与 A₅ 特征标表作加权内积：顶点 = 1⊕3⊕3′⊕5；面 = 1⊕3⊕3′⊕2·4⊕5；棱 = 1⊕3⊕3′⊕2·4⊕3·5。",
            "维数分别是 12、20、30，与集合大小相符。",
        ],
        concl="ℂ[顶点] = 1⊕3⊕3′⊕5；ℂ[面] = 1⊕3⊕3′⊕2·4⊕5；ℂ[棱] = 1⊕3⊕3′⊕2·4⊕3·5。",
    ),
    dict(
        code="Rep83", sec=5, title="A₅ 不可约表示上的外共轭", diff="中级",
        source="Artin《Algebra》2e, Ch. 10, §6, Ex. 6.7 · 印刷 p.318 / PDF p.330",
        note=f"{R_DIR}/Exercise Rep83 - Outer Conjugation on the Irreducible Representations of A5.md",
        orig="The group S_5 operates by conjugation on its normal subgroup A_5. How does this action "
             "operate on the isomorphism classes of irreducible representations of A_5?",
        zh=["S₅ 通过共轭作用在其正规子群 A₅ 上。这个作用在 A₅ 的不可约表示同构类上是怎样作用的？"],
        hints=["奇置换交换 A₅ 的两个 5-轮换共轭类。"],
        steps=[
            "用 A₅ 的元素作共轭是内自同构，固定所有特征标。",
            "奇置换交换两个 5-轮换共轭类，固定其余类。",
            "在 A₅ 的特征标表中，两个三维特征标恰好在两个 5-轮换类上互换取值。",
            "故奇共轭交换 3 与 3′，并固定 1、4、5 三个不可约表示。",
        ],
        concl="S₅/A₅ ≅ C₂ 的作用：一个二元轨道 {3, 3′}，三个不动点（1, 4, 5）。",
    ),
    dict(
        code="Rep84", sec=5, title="I 的特征标限制到 T", diff="进阶",
        source="Artin《Algebra》2e, Ch. 10, §6, Ex. 6.8 · 印刷 p.319 / PDF p.331",
        note=f"{R_DIR}/Exercise Rep84 - Restricting Icosahedral Characters to the Tetrahedral Group.md",
        orig="The stabilizer in the icosahedral group of one of the cubes inscribed in a dodecahedron "
             "is the tetrahedral group T. Decompose the restrictions to T of the irreducible characters of I.",
        zh=["正二十面体群中，正十二面体内一个内接立方体的稳定化子是正四面体群 T。把 I 的不可约特征标限制到 T 并分解。"],
        hints=["把 A₅ 的表限制到 A₄ 的单位元类、2 阶类与 3 阶类。"],
        steps=[
            "记 A₄ 的不可约特征标为 1, λ, λ², τ₃。",
            "把 A₅ 的行限制到 A₄：res(1) = 1；res(3) = res(3′) = τ₃；res(4) = 1⊕τ₃；res(5) = λ⊕λ²⊕τ₃。",
            "核对：限制后的特征标值在 A₄ 四个类上分别为 (1,1,1,1)、(3,−1,0,0)、(4,0,1,1)、(5,1,−1,−1)，与所列直和一致。",
        ],
        concl="限制分解：1 → 1；3, 3′ → τ₃；4 → 1⊕τ₃；5 → λ⊕λ²⊕τ₃。",
    ),
    dict(
        code="Rep85", sec=5, title="从特征标表看单性", diff="进阶",
        source="Artin《Algebra》2e, Ch. 10, §6, Ex. 6.9 · 印刷 p.319 / PDF p.331",
        note=f"{R_DIR}/Exercise Rep85 - Simplicity from a Character Table.md",
        orig="(a) Explain how one can prove that a group is simple by looking at its character table. "
             "(b) Use the character table of the icosahedral group to prove that it is a simple group.",
        zh=["(a) 说明如何通过查看特征标表证明一个群是单群。",
            "(b) 用正二十面体群的特征标表证明它是单群。"],
        hints=["正规子群是含单位元的共轭类之并，其阶整除 |G|。"],
        steps=[
            "(a) 列表头给出共轭类大小。列出所有含 1 且基数整除 |G| 的类之并；若只有 {1} 与 G 合格，则群是单群。",
            "等价地：正规子群是若干共轭类之并；每个真商会提供一个核非平凡的不可约特征标（由 χ(g) = χ(1) 的列读出核）。",
            "(b) A₅ 的类大小为 1, 15, 20, 12, 12。",
            "检查四个非单位元类的任意真子集与 1 相加的和，除 1 外没有一个整除 60。",
            "因此不存在非平凡真正规子群，A₅（正二十面体群）是单群。",
        ],
        concl="A₅ 单：类大小 1, 15, 20, 12, 12 的任何真并（含 1）都不整除 60。",
    ),
    dict(
        code="Rep136", sec=5, title="A₅ 的特征标表（Lang XVIII.12）", diff="进阶",
        source="Lang《Algebra》rev. 3rd ed., Ch. XVIII, Ex. 12 · 印刷 p.725 / PDF p.740",
        note=f"{R_DIR}/Exercise Rep136 - The Character Table of A5.md",
        orig="Observe that A_5 = SL_2(F_4) = PSL_2(F_5). As a result, verify that there are 5 "
             "conjugacy classes, whose elements have orders 1,2,3,5,5 respectively, and write down "
             "explicitly the character table for A_5 as was done in the text for GL_2.",
        zh=["观察 A₅ ≅ SL₂(F₄) ≅ PSL₂(F₅)。据此验证 A₅ 有 5 个共轭类，元素阶分别为 1, 2, 3, 5, 5，",
            "并像书中对 GL₂ 那样写出 A₅ 的特征标表。约定：特征标都在 ℂ 上，PSL₂(F₅) = SL₂(F₅)/{±I}。"],
        hints=["用射影直线 P¹(F₄)（5 个点）与两个环面。",
               "对五次单位根 ξ，用 −(ξ+ξ⁻¹) = (1−√5)/2 与 −(ξ²+ξ⁻²) = (1+√5)/2。"],
        steps=[
            "同构 SL₂(F₄) ≅ A₅：G₄ = SL₂(F₄) 自然作用在 F₄² 的一维子空间上（共 4+1 = 5 个），给出同态 G₄ → S₅；固定每条直线的矩阵是纯量，特征 2 中 aI ∈ G₄ 迫使 a = 1，故作用忠实。|G₄| = q(q²−1) = 60，其像在 S₅ 中指数为 2，必为 A₅。",
            "五个共轭类：把 Rep135 的类计算在 q = 4 特化——单位元；一个 2 阶 unipotent 类（15 个）；一个 3 阶分裂正则类（20 个）；两个 5 阶非分裂正则类（各 12 个）。",
            "在 A₅ 中的代表元与类大小：1A = 1（1）；2A = (12)(34)（15）；3A = (123)（20）；5A = (12345)（12）；5B = (13524)（12）。",
            "同构 PSL₂(F₅) ≅ A₅：J = SL₂(F₅)/{±I} 的类由 SL₂ 的表下传；可能的真非平凡类之并的大小为 13, 16, 21, 25, 28, 33, 36, 40, 45, 48，均不整除 60，故 J 单；其 15 个对合各属唯一的 Sylow 2-子群，共 5 个这样的子群，共轭作用给出忠实嵌入 J → S₅，像为 A₅。",
            "特征标表（列 1A, 2A, 3A, 5A, 5B；φ = (1+√5)/2，φ′ = (1−√5)/2）：χ₁ = (1,1,1,1,1)；χ₃ = (3,−1,0,φ,φ′)；χ₃′ = (3,−1,0,φ′,φ)；χ₄ = (4,0,1,−1,−1)；χ₅ = (5,1,−1,0,0)。",
            "维数核对：1² + 3² + 3² + 4² + 5² = 60。",
        ],
        concl="A₅ 有 5 个共轭类（元素阶 1, 2, 3, 5, 5），特征标表如上；维数平方和为 60。",
        extra="a5_table",
    ),
]

# 参考表：S₄ 特征标表（O ≅ S₄）
S4_TABLE = dict(
    title="参考：正八面体群 O ≅ S₄ 的特征标表",
    caption="列序：类代表 1, (12), (12)(34), (123), (1234)；类大小 1, 6, 3, 8, 6。",
    header=["特征标 \\ 类", "1", "(12)", "(12)(34)", "(123)", "(1234)", "维数"],
    rows=[
        ["1（平凡）", "1", "1", "1", "1", "1", "1"],
        ["ε（符号）", "1", "−1", "1", "1", "−1", "1"],
        ["τ", "2", "0", "2", "−1", "0", "2"],
        ["σ（标准）", "3", "1", "−1", "0", "−1", "3"],
        ["σε", "3", "−1", "−1", "0", "1", "3"],
    ],
    note="维数平方和 1+1+4+9+9 = 24 = |S₄| = |O|。",
)

# 参考表：A₅ 特征标表（I ≅ A₅）
A5_TABLE = dict(
    title="参考：正二十面体群 I ≅ A₅ 的特征标表",
    caption="列序：类 1A, 2A, 3A, 5A, 5B；类大小 1, 15, 20, 12, 12；φ = (1+√5)/2，φ′ = (1−√5)/2。",
    header=["特征标 \\ 类", "1A", "2A", "3A", "5A", "5B", "维数"],
    rows=[
        ["χ₁", "1", "1", "1", "1", "1", "1"],
        ["χ₃", "3", "−1", "0", "φ", "φ′", "3"],
        ["χ₃′", "3", "−1", "0", "φ′", "φ", "3"],
        ["χ₄", "4", "0", "1", "−1", "−1", "4"],
        ["χ₅", "5", "1", "−1", "0", "0", "5"],
    ],
    note="维数平方和 1+9+9+16+25 = 60 = |A₅| = |I|。",
)

# 群总览表
GROUPS_TABLE = dict(
    title="三个旋转群总览",
    header=["群", "阶", "抽象同构", "共轭类数", "不可约特征标维数", "几何载体"],
    rows=[
        ["T（正四面体）", "12", "A₄", "4", "1, 1, 1, 3", "正四面体的 12 个旋转"],
        ["O（正八面体）", "24", "S₄", "5", "1, 1, 2, 3, 3", "立方体 / 正八面体的 24 个旋转"],
        ["I（正二十面体）", "60", "A₅", "5", "1, 3, 3, 4, 5", "正十二面体 / 正二十面体的 60 个旋转"],
    ],
    note="全对称群（允许反射）：正四面体 ≅ S₄（24）；立方体/正八面体 ≅ S₄ × C₂（48）；"
         "正十二面体/正二十面体 ≅ A₅ × C₂（120，见 G146 的 G₁、G166）。",
)

# 速查表（分两页）
CHEAT_1 = [
    ("G166", "正十二面体全对称群的阶", "入门", "12 × 10 = 120，全群 ≅ A₅ × C₂"),
    ("G181", "对偶多面体对称群同构", "入门", "Sym(十二面体) ≅ Sym(二十面体)"),
    ("G190", "n 维超立方体对称群", "进阶", "Gₙ 是 C₂ⁿ 与 Sₙ 的半直积，|Gₙ| = 2ⁿn!，G₂ ≅ D₄"),
    ("G174", "T 在两点集上的作用", "入门", "只有平凡作用（A₄ 无 2 阶商）"),
    ("G182", "O 的极点轨道", "中级", "三个轨道：6、8、12"),
    ("G183", "体对角线的稳定化子", "入门", "Stab ≅ D₃ ≅ S₃"),
    ("G184", "保持内接正四面体的旋转", "中级", "H = T ≅ A₄"),
    ("G185", "I 的 10 阶子群", "入门", "D₅ ≤ I"),
    ("G199", "内接立方体的稳定化子", "入门", "Stab ≅ T ≅ A₄（60/5 = 12）"),
    ("G200", "S₅ 的真正规子群", "中级", "1, A₅, S₅；A₅ 唯一非平凡真正规"),
    ("G201", "I 中对合的中央化子", "入门", "C₂ × C₂（60/15 = 4）"),
    ("G202", "T 的类方程", "中级", "12 = 1+3+4+4；V₄ 是正规子群；无 6 阶子群"),
    ("G203", "O 的类方程与正规子群", "进阶", "24 = 1+6+3+8+6；正规子群仅 V₄、A₄"),
    ("G204", "T ≅ A₄，O ≅ S₄", "中级", "指数 2 包含对应两个内接正四面体"),
    ("G186", "T 与 I 的所有子群", "进阶", "T 有 5 型，I 有 9 型"),
    ("G254", "有限球面三角群", "进阶", "G(2,2,n) ≅ Dₙ，G(2,3,4) ≅ O，G(2,3,5) ≅ I"),
    ("G255", "反射生成的三角群", "进阶", "⟨x,y,z⟩ 实现 G(3,3,3)"),
    ("G256", "正二十面体三角表现", "进阶", "G ≅ A₅；H ≅ A₄；K ≅ D₅"),
    ("G146", "I 的三种扩张", "进阶", "G₁, G₂, G₃ 两两不同构（阶均 120）"),
    ("Rep108", "单群无二维表示", "进阶", "忠实像落在 SL₂(ℂ) 的二元多面体群中，矛盾"),
]

CHEAT_2 = [
    ("Rep49", "O 与 Dₙ 的标准表示", "入门", "O 同构于行列式 1 的带符号置换矩阵；Dₙ 由 R, S 给出"),
    ("Rep50", "正四面体表示不可约", "中级", "χ = (3,−1,0,0)，(χ,χ) = 1"),
    ("Rep55", "低维实表示的有限群", "进阶", "(b) Cₙ, Dₙ；(c) Cₙ, Dₙ, A₄, S₄, A₅"),
    ("Rep58", "不可约表示的维数", "中级", "O: 1,1,2,3,3；D₅: 1,1,2,2；D₆: 1,1,1,1,2,2"),
    ("Rep79", "T 在棱上的作用", "中级", "ℂ[棱] = 1 ⊕ λ ⊕ λ² ⊕ τ₃"),
    ("Rep80", "O 的特征标表与置换作用", "进阶", "面 1⊕τ⊕σε；顶点 1⊕ε⊕σ⊕σε；对径棱 1⊕τ⊕σ⋯"),
    ("Rep82", "I 的置换特征标", "进阶", "顶点 1⊕3⊕3′⊕5；面/棱再含 2·4 与 3·5"),
    ("Rep83", "A₅ 的外共轭作用", "中级", "交换 3 与 3′，固定 1、4、5"),
    ("Rep84", "I 的特征标限制到 T", "进阶", "4 → 1⊕τ₃；5 → λ⊕λ²⊕τ₃"),
    ("Rep85", "从特征标表看单性", "进阶", "A₅ 的类大小 1,15,20,12,12 使唯一正规子群为 1, A₅"),
    ("Rep136", "A₅ 的特征标表（Lang）", "进阶", "五个共轭类，阶 1,2,3,5,5；维数平方和 60"),
]
